const express = require("express");
const noteRoutes = require("./routes/notes.js");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const db = require("./data/db.js");

const app = express();

app.use(express.json());
app.use(noteRoutes);
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

const port = process.env.PORT || 4567;
db.connect();

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});