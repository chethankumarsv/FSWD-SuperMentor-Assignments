# 🚀 Hello Server (Node.js)

## 📌 Description
A basic Node.js server using Express that handles multiple routes and returns different responses.

## 🛠 Tech Stack
- Node.js
- Express.js

## 🔗 Routes
- `/` → Welcome message
- `/about` → About page
- `/contact` → Contact info
- `/user/:name` → Dynamic greeting

## ▶️ Run Project
```bash
npm install
node server.js

---

# 🔥 Upgrade (Make it Stand Out)

Add these if you want recruiter-level polish:

### ✅ JSON API response
```javascript
app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" }
  ]);
});