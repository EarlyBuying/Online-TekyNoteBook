const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  date: {
    type: String,
  },
  header: {
    type: String,
  },
  notes: {
    type: String,
  },
});

const Customers = mongoose.model("customer", CustomerSchema);
module.exports = Customers;
