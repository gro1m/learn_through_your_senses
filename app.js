// Imports
const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');

// Import Routes
const mlRoutes = require('./routes/machine_learning');

// App Configuration
const app = express();

// Set Templating Engine and Views Directory
app.engine('ejs', ejsMate);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

// Routes

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about_me', (req, res) => {
    res.render('about_me');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/build_computer_intro', (req, res) => {
    res.render('build_computer_intro');
});

app.get('/combinatorics', (req, res) => {
    res.render('combinatorics');
});

app.use('/', mlRoutes);

// Listen on port 3000
app.listen(3000, () => {
    console.log('Serving on port 3000');
})
