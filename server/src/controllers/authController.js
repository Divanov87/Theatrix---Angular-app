const router = require('express').Router();
const authService = require('../services/authService');
const { isAuth, isGuest } = require('../middlewares/authMiddleware');
const { getErr } = require('../utilities/errHelper');
const { SESSION_COOKIE_NAME, ADMIN_IP_ADDRESS } = require('../configs/envVariables');

// --------------------------------- LOGIN -----------------------------------------------

router.post('/login', isGuest, async (req, res) => {
    const { username_email, password } = req.body;
    const userIp = req.ip.toString().replace('::ffff:', '');

    try {
        const user = await authService.login(username_email, password, userIp);
        const token = await authService.generateToken(user);

        delete user.password;
        res.cookie(SESSION_COOKIE_NAME, token, { httpOnly: true, secure: false, sameSite: 'lax' });
        res.status(200).json({ message: 'Login successful', user, token, role });

    } catch (err) {
        res.status(403).json({ error: getErr(err) });
    }
});

// --------------------------------- REGISTER -----------------------------------------------

router.post('/register', isGuest, async (req, res) => {
    const { username, password, repeatPassword, email, city } = req.body;
    const userIp = req.ip.toString().replace('::ffff:', '');
    const role = userIp == ADMIN_IP_ADDRESS || "127.0.0.1" ? 'admin' : 'user';

    try {
        const user = await authService.register({ username, password, repeatPassword, email, city, role, userIp });
        const token = await authService.generateToken(user);

        delete user.password;
        res.cookie(SESSION_COOKIE_NAME, token, { httpOnly: true, secure: false, sameSite: 'lax' });
        res.status(201).json({ message: 'User registered successfully', role });
    } catch (err) {
        res.status(400).json({ error: getErr(err) });
    }
});

// --------------------------------- LOGOUT -----------------------------------------------

router.get('/logout', isAuth, async (req, res, next) => {
    try {

        // const userToken = req.userToken;
        // const userToken = req.user.token;

        //or
        // const userToken = req.user;
        // await userLogout(userToken)

        res.clearCookie(SESSION_COOKIE_NAME);

        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
