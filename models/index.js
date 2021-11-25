const User = require('./User');
const Apps = require('./Apps');

User.hasMany(Apps, {
  
});

Apps.belongsTo(User, {
  
});

module.exports = { User, Apps };