const router = require('express').Router();
const authService = require('../services/authServeice');
const { isAuth, isGuset} = require('../middlewares/authMiddleware')

router.get('/login', (req,res) => {
    res.render('auth/login');
});

router.post('/login',isGuset, async(req, res) => {
    const {username, password} = req.body;

    const user = await authService.login(username, password);
    const token = await authService.createToken(user);

    res.cookie('user', token, {httpOnly: true});
    res.redirect('/');
});

router.get('/register',isGuset, (req,res) => {
    res.render('auth/register');
});

router.post('/register',isGuset,  async (req,res) => {
    const {username, password, repassword, address} = req.body;

    if(password !== repassword){
        return res.render('auth/register', {error: "Passwords do not match!"})
    }

    try {
        
        const createUser = await authService.create({username,password,address});
        const token = await authService.createToken(createUser);

        res.cookie('user', token, {httpOnly: true});
        res.redirect('/')
    } catch (error) {
        return res.render('auth/register', {error})
    }

    res.end();
});

router.get('/logout',isAuth , (req, res) =>{
    res.clearCookie('user');
    res.redirect('/');
});


module.exports = router;