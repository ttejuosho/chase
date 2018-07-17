module.exports = function (sequelize, DataTypes) {
    const CreditOfficer = sequelize.define("CreditOfficer", {
        name: {
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
        CreditOfficer.associate = function(models) {
            CreditOfficer.hasMany(models.Customer, {
                onDelete: 'cascade'
            });
        };

    return CreditOfficer;
}