
const Recipe = require('./recipe');
const User = require('./loginModel');
const Restaruant = require('./restaurantModel');



User.hasMany(Recipe, {
    foreignKey: 'user_id'
})


Recipe.belongsTo(User, {
    foreignKey: 'user_id'
})


User.hasMany(Restaruant, {
  foreignKey: 'user_id'
})


Restaruant.belongsTo(User, {
  foreignKey: 'user_id'
})


module.exports = { User, Recipe, Restaruant };