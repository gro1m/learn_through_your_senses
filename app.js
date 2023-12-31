// Imports
const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');

// Import Routes
const computerRoutes = require('./routes/computer');
const mainRoutes = require('./routes/main');
const mathRoutes = require('./routes/math');
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
app.use('/', mainRoutes);
app.use('/', computerRoutes);
app.use('/', mathRoutes);
app.use('/', mlRoutes);

// Listen on port 3000
app.listen(3000, () => {
    console.log('Serving on port 3000');
})
