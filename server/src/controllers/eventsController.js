const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const { isAdmin, isUser } = require('../middlewares/roleMiddleware');
const eventsService = require('../services/eventsService');
const { getErr } = require('../utilities/errHelper');


// ---------------------------------CREATE-------------------------------------------

router.get('/add', isAdmin, (req, res) => {
    res.status(200).json({ message: 'Event add page' });
});

router.post('/add', isAdmin, async (req, res) => {
    try {
        const eventsData = req.body;
        const addedEvent = eventsService.create(req.user._id, eventsData);
        res.status(201).json(addedEvent);
    } catch (err) {
        res.status(400).json({ error: getErr(err) });
    }
});

// ---------------------------------EVENTS----------------------------------------

// router.get('/', async (req, res) => {
//     try {
//         const latestEvents = await eventsService.getLatest().lean();
//         res.status(200).json({ latestEvents });
//     } catch (err) {
//         res.status(500).json({ error: getErr(err) });
//     }
// });

router.get('/', async (req, res) => {
    try {
        const city = res.locals.location;
        if (city) {
            const cityEvents = await eventsService.getEventsByLocation(city);
            res.status(200).json({cityEvents, city});
        } else {
            const latestEvents = await eventsService.getLatest();
            // res.status(200).json(latestEvents);
            res.status(200).json(latestEvents);
        }
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ---------------------------------GEO----------------------------------------

router.get('/user', async (req, res) => {
    try {
        const userLocation = req.query.location;
        if (!userLocation) {
            return res.status(400).json({ error: "User location not provided" });
        }
        const cityEvents = await eventsService.getEventsByLocation(userLocation);
        res.json(cityEvents);
    } catch (error) {
        console.error('Error sending events:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ---------------------------------THEATER----------------------------------------

router.get('/theater', async (req, res) => {
    try {
        const theaterEvents = await eventsService.getEventsByCategory('Theater');
        // res.status(200).json(theaterEvents);
        res.status(200).json(theaterEvents);
    } catch (err) {
        res.status(500).json({ error: getErr(err) });
    }
});


// ---------------------------------CONCERTS----------------------------------------

router.get('/concerts', async (req, res) => {
    try {
        const concertEvents = await eventsService.getEventsByCategory('Concert');
        // res.status(200).json(concertEvents);
        res.status(200).json(concertEvents);
    } catch (err) {
        res.status(500).json({ error: getErr(err) });
    }
});


// ---------------------------------UPDATE/EDIT-------------------------------------------

router.get('/:eventId', async (req, res) => {
    try {
        const eventsData = await eventsService.getOneOwner(req.params.eventId).lean();
        res.status(200).json(eventsData);
    } catch (err) {
        res.status(400).json({ error: getErr(err) });
    }
});

router.put('/:eventId', isAdmin, async (req, res) => {
    try {
        const eventData = req.body;
        const eventsData = await eventsService.update(req.params.eventId, eventData);
        // res.status(200).json({ message: 'Event updated successfully' });
        res.status(200).json(eventsData);
    } catch (err) {
        res.status(400).json({ error: getErr(err) });
    }
});

// ---------------------------------DELETE-------------------------------------------

router.delete('/:eventId', isAdmin, async (req, res) => {
    try {
        const eventsData = await eventsService.delete(req.params.eventId);

        // res.status(200).json({ message: 'Event deleted successfully' });
        res.status(200).json(eventsData);

    } catch (err) {
        res.status(400).json({ error: getErr(err) });
    }
});

// ---------------------------------DETAILS-------------------------------------------

router.get('/:eventId/details', async (req, res) => {
    try {
        const eventsData = await eventsService.getOneOwner(req.params.eventId).lean();

        if (!eventsData) {
            return res.status(404).json({ error: 'Event not found' });
        }

        const ticketsData = await eventsService.getOne(req.params.eventId).lean();
        const ticketsLeft = ticketsData.tickets - 1;

        const isOwner = eventsData.owner && eventsData.owner._id == req.user?._id;
        const isLiked = eventsData.likesList.some(user => user._id == req.user?._id);

        const eventsData2 = await eventsService.getOneBuyer(req.params.eventId).lean();
        const isBuyed = eventsData2.buysList.some(user => user._id == req.user?._id);

        const eventsData3 = await eventsService.getOnePin(req.params.eventId).lean();
        const isPinned = eventsData3.pinsList.some(user => user._id == req.user?._id);

        res.status(200).json([{
            ...eventsData,
            isOwner,
            isLiked,
            isBuyed,
            isPinned,
            ticketsLeft}
            ]);        
    } catch (err) {
        res.status(400).json({ error: getErr(err) });
    }
});


// ---------------------------------LIKE--------------------------------------------------

router.post('/:eventId/like', isUser, async (req, res) => {
// router.post('/:eventId/like', isAuth, async (req, res) => {

    try {
        const like = await eventsService.like(req.params.eventId, req.user._id);
        //res.status(200).json({ message: 'Event liked successfully' });
        res.status(200).json(like);
    } catch (err) {
        res.status(400).json({ error: getErr(err) });
    }
});

// ---------------------------------PIN--------------------------------------------------

router.post('/:eventId/pin', isAdmin, async (req, res) => {
    try {
        const pin = await eventsService.pin(req.params.eventId, req.user._id);
        //res.status(200).json({ message: 'Event pinned successfully' });
        res.status(200).json(pin);
    } catch (err) {
        res.status(400).json({ error: getErr(err) });
    }
});


// ---------------------------------BUY--------------------------------------------------

router.post('/:eventId/buy', isUser, async (req, res) => {
    try {
        const bought = await eventsService.buy(req.params.eventId, req.user._id);
        //res.status(200).json({ message: 'Ticket bought successfully' });
        res.status(200).json(bought);
    } catch (err) {
        res.status(400).json({ error: getErr(err) });
    }
});


module.exports = router;