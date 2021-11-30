const sequelize = require('../config/connection');
const { User, Apps } = require('../models');

const userData = require('./userData.json');
const appData = require('./appData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const app of appData) {
        await Apps.create({
            ...app,
            user_id: users[0].id,
        });
    }

    process.exit(0);
};

seedDatabase();