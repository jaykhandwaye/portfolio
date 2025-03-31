import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "client/dist"))); // Serve static files

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
