"use strict";

const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Product = mongoose.model("Product");
const repository = require("../repositories/product-repository")

exports.get = (req, res, next) => {
  repository.get()
    .then((data) => {
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