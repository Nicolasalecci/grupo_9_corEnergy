const express = require("express");
const app = express();
const path = require("path");

app.listen(3000,() => console.log("Server on http://localhost:3000"));

//public acces
app.use(express.static(path.resolve(__dirname, "../public")))

//rutas
app.use(require("./routes/web"));