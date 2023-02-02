const express = require("express");
const auth = require("../middleware/auth");
const Customers = require("../models/Customer");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
    const { name, age } = req.body;

    const newCustomer = new Customers({
      name,
      age,
    });

    const saveCustomer = await newCustomer.save();
    res.json(saveCustomer);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

router.get("/view", auth, async (req, res) => {
  try {
    const cusShow = await Customers.find();
    res.json(cusShow);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

module.exports = router;
