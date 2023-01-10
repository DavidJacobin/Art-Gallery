const router = require('express').Router();
const authService = require('../services/authServeice');

router.get('/login', (req,res) => {
    res.render('auth/login');
});

router.get('/register', (req,res) => {
    res.render('auth/register');
});

router.post('/register', async (req,res) => {
    const {username, password, repassword} = req.body;

    if(password !== repassword){
        return res.render('auth/register', {error: "Passwords do not match!"})
    }

    try {
        
        const createUser = await authService.create({username,password});
        res.redirect('/login')
    } catch (error) {
        return res.render('auth/register', {error})
    }

    res.end();
});


module.exports = router;