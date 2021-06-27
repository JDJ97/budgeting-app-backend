const transactions = require('express').Router();
const transactionsArr = require('../models/transactions');

transactions.get('/', (req, res) => {
    res.json({ 
        payload: transactionsArr, 
        success: true
    });
});

transactions.post('/', (req, res) => {
    const { from, date, name, amount } = req.body;
    if (from && date && name && amount) {
        transactionsArr.push(req.body);
        res.json({
            success: true, 
            payload: req.body
        }); 
    } else {
        res.status(422).json({
            success: false, 
            payload: 'Must include all required.'
        });
    }
});

transactions.get('/:idx', (req, res) => {
    const transaction = transactionsArr[req.params.idx];
    if (transaction) {
        res.json({
            success: true,
            payload: transaction
        });
    } else {
        res.redirect('/404');
    }
});

transactions.put('/:idx', (req, res) => {
    const newTransaction = req.body;
    const existingTransaction = transactionsArr[req.params.idx];
    if (existingTransaction) {
        transactionsArr[req.params.idx] = newTransaction;
        res.json({
            success: true, 
            payload: newTransaction
        }); 
    } else {
        res.redirect('/404');
    }
});

transactions.delete('/:idx', (req, res) => {
    const { idx } = req.params;
    const existingTransaction = catsArr[idx];
    if (existingTransaction) {
        transactionsArr.splice(idx, 1);    
        res.json({
            success: true, 
            payload: existingTransaction
        });

    } else {
        res.redirect('/404');
    }
});



module.exports = transactions;