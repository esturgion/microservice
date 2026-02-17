require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const articlesRoutes = require("./routes/articles");
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.use(
  cors({
    origin: ["http://localhost:5173", "https://votredomaine.com", "http://localhost:8000"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/articles", articlesRoutes);

module.exports = app;
