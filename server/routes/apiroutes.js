var db = require("../models");

module.exports = app => {

    app.get('/api/customers', (req,res) => { 
        db.Customer.findAll({}).then(data => {
            res.json(data);
        });
    });

    app.get('/api/credos', (req,res) => {
        db.Credit_Officer.findAll({}).then(data => {
            res.json(data);
        });
    });

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

    app.put('/api/user/')


}