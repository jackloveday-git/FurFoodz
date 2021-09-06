
const Food = require('./Food');
const Recipe = require('./Recipe');
const Dish = require('./Dish')



Food.belongsToMany(Dish, {
    through: Recipe,
  foreignKey: 'food_id'
});

Dish.belongsToMany(Food, {
    through: Recipe,
    foreignKey: 'dish_id'
});




module.exports = {
  Food,
  Recipe,
  Dish,
};