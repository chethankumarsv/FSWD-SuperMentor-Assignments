const express = require("express");
const router = express.Router();
const { books } = require("../data/data");

// GET all books
router.get("/", (req, res) => {
  res.json(books);
});

// GET book by ID
router.get("/:id", (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

// ADD new book
router.post("/", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    authorId: req.body.authorId
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// DELETE book
router.delete("/:id", (req, res) => {
  const index = books.findIndex(b => b.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Not found" });

  books.splice(index, 1);
  res.json({ message: "Book deleted" });
});

module.exports = router;