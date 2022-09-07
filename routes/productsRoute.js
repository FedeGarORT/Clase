const express = require("express");
const route = express.Router();
const prodController = require("../controllers/productsController");

route.get("/", prodController.start);
route.get("/:id", prodController.findById);
route.post("/create", prodController.create);
route.put("/edit/:id", prodController.edit);
route.delete("/delete/:id", prodController.delete);


module.exports = route;