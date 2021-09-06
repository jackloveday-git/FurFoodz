const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');


class Recipe extends Model {}

Recipe.init(
    {
        recipe_id: {
            type: DataTypes.INTEGER
          },
          recipe_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 60],
            },
          },
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe',
    }
);

module.exports = Recipe;