const express = require('express');
const router = express.Router();

// Route for home page
router.get('/', (req, res) => {
    res.render('home');
});

// Route for BMI calculation
router.get('/calculate', (req, res) => {
    const { height, weight } = req.query;

    // Validate input
    if (!height || !weight || isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        return res.render('error', { message: 'Please enter valid height and weight.' });
    }

    // Calculate BMI
    const bmi = weight / (height * height);

    // Render the result page with BMI
    res.render('result', { bmi: bmi.toFixed(2) });
});

module.exports = router;
