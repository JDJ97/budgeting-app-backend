const transactions = require('express').Router();
const transactionsArray = require('../models/transactions');

transactions.get("/", (req, res) => {
    res.json(transactionsArray);
})

 //show by ID
transactions.get("/:id", (req, res) => {
    if (transactionsArray[req.params.id]) {
        res.json(transactionsArray[req.params.id])
    } else {
        res.redirect("/404")
    }
})

//create
transactions.post("/", (req, res) => {
    transactionsArray.push(req.body)
    res.json(transactionsArray[transactionsArray.length - 1])
})

//destroy
transactions.delete("/:id", (req, res) => {
    const deletedTransaction = transactionsArray.splice(req.params.id, 1)
    res.status(200).json(deletedTransaction)
})

//update
transactions.put("/:id", (req, res) => {
    transactionsArray[req.params.id] = req.body
    res.status(200).json(transactionsArray[req.params.id])
})



module.exports = transactions;