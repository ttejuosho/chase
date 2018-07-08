module.exports = function (sequelize, DataTypes) {
    const Credit_Officer = sequelize.define("Credit_Officer", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        branch_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        branch_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        manager: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },({timestamps: true})
)
        Credit_Officer.associate = function(models) {
            Credit_Officer.hasMany(models.Customer, {
                onDelete: 'cascade'
            });
        };

    return Credit_Officer;
}