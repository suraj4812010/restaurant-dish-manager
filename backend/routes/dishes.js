const express = require("express");
const  router = express.Router();

const {createDishes} = require("../controllers/createDishes");
const { getDishes } = require("../controllers/getDishes");
const { updateDishes } = require("../controllers/updateDishes");
const { deletedishes } = require("../controllers/deleteDishes");

router.post("/createdishes" , createDishes);
router.get("/getdishes" , getDishes);
router.put("/updateIsPublished", updateDishes);
router.delete("/deletedishes" , deletedishes);

module.exports = router;