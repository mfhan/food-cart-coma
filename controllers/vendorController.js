const express = require('express');
const { Vendor } = require('../models');
const {restrict} = require('../services/auth.js')
const vendorController = express.Router();

vendorController.get('/', async (req, res) => {
  try {
    const vendors = await Vendor.findAll();
    console.log("All the carts!!!")
    res.json(vendors);
  } catch (e) {
    res.status(500).send(e.message);
  }
});


vendorController.get('/:id', async (req, res) => {
  try {
    const vendor = await Vendor.findByPk(req.params.id);
    console.log("This is the yumyum")
    //using spread operator:
    //res.json(vendors);
    res.json({...vendor.dataValues});
  } catch (e) {
    res.status(500).send(e.message);
  }
});

vendorController.post('/', restrict, async (req, res) => {
  try {
    const vendor = await Vendor.create(req.body);
    res.json(vendor);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

vendorController.put('/:id', restrict, async (req, res) => {
  try {
    const vendor = await Vendor.findByPk(req.params.id);
    await vendor.update(req.body);
    res.json(vendor);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

vendorController.delete('/:id', restrict, async (req, res) => {
  try {
    const vendor = await Vendor.findByPk(req.params.id);
    await vendor.destroy();
    res.json(vendor);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//allows you to add a special to a vendor
// vendorController.put('/:special_id/', async (req, res) => {
//   try {
//     const vendor = await Vendor.findByPk(req.params.vendor_id);
//     const newSpecial = await Special.findByPk(req.params.special_id);
//     await vendor.addSpecial(newSpecial);
//     const specials = await vendor.getSpecial();
//     res.json({ ...vendor.dataValues, specials });
//   } catch (e) {
//     res.status(500).send(e.message);
//   }
// })


module.exports = vendorController;
