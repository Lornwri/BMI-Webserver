const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index.js');

const app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Set up the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Use routes
app.use('/', indexRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
