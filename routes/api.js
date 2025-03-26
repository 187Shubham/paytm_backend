const express = require('express')
const router = express.Router();
const accountController = require('../controllers/accountController');
const transactionController = require('../controllers/transactionController');

// account routes 
router.post('/accounts' , accountController.createAccount);
router.get('/accounts/ :Id' , accountController.getAccount);
router.get('/accounts', accountController.getAllAccounts);

// transaction routes 
router.post('/transactions', transactionController.createTransaction)
router.get('/transactions', transactionController.getTransactions);

module.exports = router;