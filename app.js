const express = require("express");
const app = express();
const prodRoute = require("./routes/productsRoute");
app.use(express.json());

app.use("/products", prodRoute);

app.listen(8080, () => {
    console.log("Levantando sv")
})