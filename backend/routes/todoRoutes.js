const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Routes
router.post('/', todoController.createTodo); // Create a new todo
router.get('/', todoController.getTodos); // Get all todos with pagination & search
router.get('/:id', todoController.getTodoById); // Get a single todo by ID
router.put('/:id', todoController.updateTodo); // Update a todo
router.delete('/:id', todoController.deleteTodo); // Delete a todo

module.exports = router;
