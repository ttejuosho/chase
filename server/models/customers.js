module.exports = function(sequelize, DataTypes){
    const Customer = sequelize.define("Customer", {
        name: {
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
    }, ({timestamps: true})
);

    Customer.associate = models => {
        Customer.belongsTo(models.CreditOfficer, {
            foreignKey: {
                allowNull: false,
                onDelete: 'cascade'
              }
        })
    };

    return Customer;
}