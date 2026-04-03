const express = require("express");
const app = express();

app.use(express.json());

// Home route (ADD THIS)
app.get("/", (req, res) => {
  res.send("📘 Welcome to Route Master API");
});

const bookRoutes = require("./routes/books");
const authorRoutes = require("./routes/authors");

app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});