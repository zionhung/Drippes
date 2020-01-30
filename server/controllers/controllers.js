const mongoose = require("mongoose");
const Product = mongoose.model("Product");
const Order = mongoose.model('Order');
const Employee = mongoose.model('Employee')

module.exports = {
    createProduct: function (req, res) {
        console.log('req.body:', req.body)
        const errors = { errors: "" }
        Product.find()
            .then(products => {
                for (var product of products) {
                    if (req.body.name == Product.name) {
                        console.log('errors happened:')
                        errors.errors = "can't have same names in Product!"
                    }
                }
                console.log('errors:', errors)
                if (errors.errors != "") {
                    res.json(errors)
                } else {
                    Product.create(req.body)
                        .then(product => res.json(product))
                        .catch(err => res.json(err));
                }
            })
    },
    createEmployee: function (req, res) {
        console.log('req.body:', req.body)
        const errors = { errors: "" }
        Employee.find()
            .then(employees => {
                for (var employee of employees) {
                    if (req.body.name == Employee.name) {
                        console.log('errors happened:')
                        errors.errors = "can't have same names in Employee!"
                    }
                }
                console.log('errors:', errors)
                if (errors.errors != "") {
                    res.json(errors)
                } else {
                    Employee.create(req.body)
                        .then(employee => res.json(employee))
                        .catch(err => res.json(err));
                }
            })
    },
}

