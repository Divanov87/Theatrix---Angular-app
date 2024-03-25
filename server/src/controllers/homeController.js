const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const eventsService = require('../services/eventsService');

router.get('/', async (req, res) => {
    try {
        const city = res.locals.location;

        let latestPins;
        let topRatedEvents;
        let theaterEvents;
        let concertEvents;

        if (city) {
            latestPins = await eventsService.getPinned();
            topRatedEvents = await eventsService.getEventsSortedByRatingLogged(city);
            theaterEvents = await eventsService.getEventsByCategoryLogged('Theater', city);
            concertEvents = await eventsService.getEventsByCategoryLogged('Concert', city);
        } else {
            latestPins = await eventsService.getPinned();
            topRatedEvents = await eventsService.getEventsSortedByRating();
            theaterEvents = await eventsService.getEventsByCategory('Theater');
            concertEvents = await eventsService.getEventsByCategory('Concert');
        }

        res.status(200).json({ latestPins, topRatedEvents, theaterEvents, concertEvents });
    } catch (error) {
        console.error('Error in home route:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/search', isAuth, async (req, res) => {
    try {
        const search = req.query;
        const events = await eventsService.search(search);
        res.status(200).json({ search, events });
    } catch (error) {
        console.error('Error in search route:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/contacts', async (req, res) => {
    try {
        res.status(200).json({ title: 'Contacts Page' });
    } catch (error) {
        console.error('Error in contacts route:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/about', async (req, res) => {
    try {
        res.status(200).json({ title: 'About Page' });
    } catch (error) {
        console.error('Error in about route:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/profile', isAuth, async (req, res) => {
    try {
        const user = await eventService.find(req.user._id).populate('bought').populate('liked').lean();
        const likes = user.liked.map(x => x.name).join(', ');
        const boughts = user.bought.map(x => x.name).join(', ');
        res.status(200).json({ title: "Profile page", user, likes, boughts });
    } catch (error) {
        console.error('Error in profile route:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
