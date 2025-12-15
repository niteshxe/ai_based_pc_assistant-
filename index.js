const express = require("express");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
const morgan = require("morgan");
app.set("view engine", "ejs");
dotenv.config();
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.redirect("/ollama");
});

app.use("/", require("./routes/control"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Jarvis running at http://localhost:${PORT}`);
});
