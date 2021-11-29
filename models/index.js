const User = require('./User');
const Apps = require('./Apps');

User.hasMany(Apps, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Apps.belongsTo(User, {
    foreignKey: "user_id"
});

module.exports = { User, Apps };