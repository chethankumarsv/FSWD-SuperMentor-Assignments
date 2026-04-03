const Task = require('../models/Task');

// Create
exports.createTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json(task);
};

// Get all
exports.getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

// Get one
exports.getTaskById = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
};

// Update
exports.updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
};

// Delete
exports.deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
};