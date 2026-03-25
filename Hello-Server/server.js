const express = require("express");
const app = express();

const PORT = 3000;

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Welcome to Hello Server!");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is the About page.");
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("Contact us at: support@example.com");
});

// Dynamic route
app.get("/user/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}! 👋`);
});

// 404 Route (important)
app.use((req, res) => {
  res.status(404).send("❌ Page Not Found");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});