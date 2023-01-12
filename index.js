const express = require('express');
const hbs = require('express-handlebars');
const routes = require('./routes')
const { dbInit } = require('./config/dbinit')
const cookieParser = require('cookie-parser');
const { auth } = require('./middlewares/authMiddleware')



const app = express();

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(auth);
app.use(routes);


dbInit();
app.listen(3000, () => console.log('Server is listening!'));