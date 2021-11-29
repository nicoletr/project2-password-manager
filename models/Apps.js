const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Apps extends Model {}

Apps.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        application_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        web_address: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate checks for url format
            validate: {
                isUrl: true,
            },
        },

        user_id: {
            type: DataTypes.INTEGER,
            // foreign key references /user mopdel, and the key: id
            references: {
                model: "user",
                key: "id",
            },
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "apps",
    }
);

module.exports = Apps;