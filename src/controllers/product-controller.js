"use strict";

const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Product = mongoose.model("Product");

exports.get = (req, res, next) => {
  Product.find({ active: true }, "title price slug").then((data) => {
    res.status(201).send(data);
  });
};

exports.post = (req, res, next) => {
  var product = new Product(req.body);
  product.save();
  res.status(201).send({
    message: "deu certo",
  });
};
