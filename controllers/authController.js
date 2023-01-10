const router = require('express').Router();

router.get('/login', (req,res) => {
    res.render('auth/login');
});

router.get('/register', (req,res) => {
    res.render('auth/register');
});

router.post('/register', (req,res) => {
    const {username, password, repassword} = req.body;

    if(password !== repassword){
        return res.render('auth/register', {error: "Passwords do not match!"})
    }

    res.end();
});


module.exports = router;