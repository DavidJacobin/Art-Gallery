const router = require('express').Router();
const authService = require('../services/authServeice');

router.get('/login', (req,res) => {
    res.render('auth/login');
});

router.post('/login', async(req, res) => {
    const {username, password} = req.body;

    const user = await authService.login(username, password);
    const token = await authService.create(user);

    res.cookie('user', token);
    res.redirect('/');
});

router.get('/register', (req,res) => {
    res.render('auth/register');
});

router.post('/register', async (req,res) => {
    const {username, password, repassword, address} = req.body;

    if(password !== repassword){
        return res.render('auth/register', {error: "Passwords do not match!"})
    }

    try {
        
        const createUser = await authService.create({username,password,address});
        res.redirect('/login')
    } catch (error) {
        return res.render('auth/register', {error})
    }

    res.end();
});


module.exports = router;