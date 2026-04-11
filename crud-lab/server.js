const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Item = require('./models/Item');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// CREATE
app.post('/items', async (req, res) => {
    const item = await Item.create(req.body);
    res.status(201).json(item);
});

// READ ALL
app.get('/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

// READ ONE
app.get('/items/:id', async (req, res) => {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
});

// UPDATE
app.put('/items/:id', async (req, res) => {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.json(item);
});

// DELETE
app.delete('/items/:id', async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});