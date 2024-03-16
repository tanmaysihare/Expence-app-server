const express = require('express');
const router = express.Router();
const {Expenses} = require('../models');

router.get('/', async (req, res) => {
    const listOfExpenses = await Expenses.findAll();
    res.json(listOfExpenses);
});

router.post('/', async (req, res) => {
    try {
        const expense = req.body;
        await Expenses.create(expense);
        res.json(expense);
    } catch (error) {
        console.error('Error creating expense:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await Expenses.destroy({ where: { id: id } });
    res.json({ message: 'Expense deleted successfully' });
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const expense = req.body;
    await Expenses.update(expense, { where: { id: id } });
    res.json({ message: 'Expense updated successfully' });
});

module.exports = router; 
