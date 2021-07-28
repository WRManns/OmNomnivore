const sequelize = require('../config/connection');
const { loginModel } = require('../models');

const userData = require('./user-seeds.json');

const seedDatabase = async() => {
    await sequelize.sync({ force: true });

    const users = await loginModel.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    }

    process.exit(0);

seedDatabase();