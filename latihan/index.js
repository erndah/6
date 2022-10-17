const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

// untuk mengatasi cors policy
app.use(cors());
app.use(bodyParser.json());
//import lokal modul
const dataRoutes = require("./routes");

app.use("/users", dataRoutes);
app.listen(port, () => console.log(`server berjalan di localhost:${port}`));
