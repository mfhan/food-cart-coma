const Sequelize  = require('sequelize');

const db = new Sequelize({
  database: 'foodcoma_db',
  dialect: 'postgresql',
  define: { underscored: true }
});

class Vendor extends Sequelize.Model {}
Vendor.init({
  username: Sequelize.STRING,
	zipcode: Sequelize.INTEGER,
  lat: {
    type: Sequelize.FLOAT,
    allowNull: true,
    defaultValue: 40.753345,
    validate: { min: -90, max: 90 }
  },
  long: {
    type: Sequelize.FLOAT,
    allowNull: true,
    defaultValue: -73.982759,
    validate: { min: -180, max: 180 }
  },
  snapshot: Sequelize.TEXT,
	email: Sequelize.STRING,
	website: Sequelize.STRING
}, {
  sequelize: db,
  modelName: 'vendor'
});

class Special extends Sequelize.Model {}
Special.init({
  name: Sequelize.STRING,
	imagelink: Sequelize.TEXT,
  description: Sequelize.TEXT
}, {
  sequelize: db,
  modelName: 'special'
});


class User extends Sequelize.Model {}
User.init({
  username: Sequelize.STRING,
	email: Sequelize.STRING,
  favorites: Sequelize.STRING
}, {
  sequelize: db,
  modelName: 'user'
});

// Artist.belongsToMany(Sponsor, { through: 'artist_sponsors' });
// Sponsor.belongsToMany(Artist, { through: 'artist_sponsors' });

module.exports = {
  User, Special, Vendor, db
}
