const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: String,
  },
});

const Customers = mongoose.model("customer", CustomerSchema);
module.exports = Customers;
