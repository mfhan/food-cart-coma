const express = require('express');
const { Special } = require('../models');

const specialController = express.Router();

specialController.get('/', async (req, res) => {
  try {
    const specials = await Special.findAll();
    console.log("All the grub!!")
    res.json(specials);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = specialController;
