const express = require('express');
const hbs = require('express-handlebars');
const routes = require('./routes')


const app = express();

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(routes);

app.listen(3000, () => console.log('Server is listening!'));