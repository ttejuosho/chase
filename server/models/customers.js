module.exports = function(sequelize, DataTypes){
    const Customer = sequelize.define("Customer", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
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
        business_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        business_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        business_phone: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, ({timestamps: false})
);

    // Customer.associate = models => {
    //     Customer.hasOne(models.SavingsAccount),
    //     Customer.hasOne(models.LoansAccount)
    // }

    return Customer;
}