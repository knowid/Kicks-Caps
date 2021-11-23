const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    default: "others",
  },
  name: {
    type: String,
    required: true,
  },
  description: String, 
  img: Object,
  price: {
    type: Number,
    min: 0,
  },
  qty: {
    type: Number,
    min: 0,
  },
});

module.exports = mongoose.model("Product", productSchema);
