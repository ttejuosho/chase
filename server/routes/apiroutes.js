var db = require("../models");

module.exports = app => {
// Get all customers
    app.get('/api/customers', (req,res) => { 
        db.Customer.findAll({}).then(data => {
            res.json(data);
        });
    });

// Get all credit officers
    app.get('/api/credos', (req,res) => {
        db.Credit_Officer.findAll({}).then(data => {
            res.json(data);
        });
    });

// Create new customer
    app.post('/api/customers', (req,res) => {
        db.Customer.create({
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                address: req.body.address,
                email: req.body.email,
                phone_number: req.body.phoneNumber,
                business_name: req.body.businessName,
                business_address: req.body.businessAddress,
                business_phone: req.body.businessPhone

        }).then(data => {
            res.json(data);
        });
    });
    
// Create new Credit Officers
    app.post('/api/credos', (req,res) => {
        db.Credit_Officer.create({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            phone_number: req.body.phoneNumber,
            branch_name: req.body.branchName,
            branch_Address: req.body.branchAddress,
            manager: req.body.manager

        }).then(data => {
            res.json(data);
        });
    });

// Update Customer Information
    app.put('/api/customer/:id', (req,res) => {
        db.Customer.update({
            Customer: req.body.Customer
        }, {
            where: {
                CustomerId: req.body.CustomerId
            }
        }).then(data => {
            console.log("Updating: ", data)
            res.json(data);
        })
    })

// Update Credit Officer information
    app.put('/api/credos/:id', (req,res) => {
        db.Credit_Officer.update({
            Credit_Officer: req.body.Credit_Officer
        }, {
            where: {
                Credit_OfficerId: req.body.Credit_OfficerId
            }
        }).then(data => {
            console.log("Updating: ", data)
            res.json(data);
        })
    })


}