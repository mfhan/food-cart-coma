const { Special, Vendor  } = require('./models');
const vendorData = require('./vendorData');
const specialsData = require('./specialsData');


const seed = async () => {
  try {
    const vendors = await Vendor.bulkCreate(vendorData);
    const specials = await Special.bulkCreate(specialsData);
    console.log(`${vendors.length} vendors and ${specials.length} specials created!`);
  } catch (e) {
    console.log(e.message);
  } finally {
    process.exit();
  }
};

seed();


//const { Special, Vendor  } = require('./models');
//const specials = await Vendor.bulkCreate(data);
//console.log(`${vendors.length} vendors and ${specials.length} specials created!`);
