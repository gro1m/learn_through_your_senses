import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve React build
app.use(express.static(path.join(__dirname, "dist")));

// All routes go to React for client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
