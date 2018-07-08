var db = require("../models");

module.exports = app => {
// Get all customers
    app.get('/api/customers', (req,res) => { 
        db.Customer.findAll({}).then(data => {
            res.json(data);
        });
    });

// Get one customer
    app.get('/api/customer/:id', (req,res) => {
        db.Customer.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(data){
            res.json(data);
        });
    });

// Get all credit officers
    app.get('/api/credos', (req,res) => {
        db.Credit_Officer.findAll({}).then(data => {
            res.json(data);
        });
    });

// Get one Credit officer
    app.get('/api/credos/:id', (req,res) => {
        db.Credit_Officer.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(data){
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
            branch_address: req.body.branchAddress,
            manager: req.body.manager

        }).then(data => {
            res.json(data);
        });
    });

// Update Customer Information
app.put('/api/customer/:id', (req,res) => {
    db.Customer.update( req.body, 
        {
            where: {
            id: req.body.id
        }
    }).then(data => {
        console.log("Updating: ", data)
        res.json(data);
    });
});

// Update Credit Officer information
    app.put('/api/credos/:id', (req,res) => {
        db.Credit_Officer.update( req.body, 
            {
                where: {
                id: req.body.id
            }
        }).then(data => {
            console.log("Updating: ", data)
            res.json(data);
        });
    });


}