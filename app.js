const express = require('express');
const cors = require('cors');
const transactionsController = require('./controllers/transactions');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/transactions', transactionsController);

app.get('*', (req, res) => {
    res.status(404).json({
        success: false, 
        payload: 'Page not found'
    });
});

module.exports = app;