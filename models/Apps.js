const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
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
            // foreign key references user model, and the key: id
            references: {
                model: "user",
                key: "id",
            },
        },

    },
    {
        hooks: {

            // before creation of password, converts string to hash, then stores
            beforeCreate: async (newAppData) => {
                newAppData.password = await bcrypt.hash(newAppData.password, 10);
                return newAppData;
            },

            // before updating password, converts string to hash
            beforeUpdate: async (updatedAppData) => {
                updatedAppData.password = await bcrypt.hash(updatedAppData.password, 10);
                return updatedAppData;
            },

        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "apps",
    }
);

module.exports = Apps;