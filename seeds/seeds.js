const sequelize = require('../config/connection.js');
const User = require('../models/loginModel.js');
const userData = require('./user-seeds.json');

const seedDatabase = async() => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    process.exit(0);
};

seedDatabase();