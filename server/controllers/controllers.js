const mongoose = require("mongoose");
const Product = mongoose.model("Product");
const Order = mongoose.model('Order');
const Employee = mongoose.model('Employee')

module.exports = {
    getAllProducts(req, res){
        console.log('Grabbing products');
        Product.find()
        .then(products => {
            console.log('THESE ARE THE PRODUCTS', products)
            res.json({products: products})
        })
        .catch(err => res.json(err));
    },
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
    updateProduct(req, res){
        console.log('PRODUCT TO BE UPDATED: ' + req.params.id);
        Product.findByIdAndUpdate(
            {_id: req.params.id},
            req.body,
            {runValidators: true, context: 'query'}
        )
            .then(product => {
                console.log('THIS PRODUCT: ', product)
                res.json(product)
            })
            .catch(err => {
                console.log('THERE IS AN ERROR', err);
                res.json(err)
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
    getEmployees: function (req, res) {
        Employee.find()
            .sort({ name: 1 })
            .then(employees => {
                //console.log('Employees:', Employees)
                res.json(employees)
            })
            .catch(err => res.json(err));
    },
    removeEmployee: function (req, res) {
        Employee.remove({ _id: req.params.id })
            .then(results => res.json(results))
            .catch(err => res.json(err));
    },
    makeAdmin: function (req, res) {
        console.log('req.body.id:', req.body.id)
        Employee.findOneAndUpdate({ _id: req.body.id }, { authority: 1 })
            .then(employee => res.json(employee))
            .catch(err => res.json(err));
    },
    makeEmployee: function (req, res) {
        console.log('req.body.id:', req.body.id)
        Employee.findOneAndUpdate({ _id: req.body.id }, { authority: 0 })
            .then(employee => res.json(employee))
            .catch(err => res.json(err));
    },
    changeConvertrate: function (req, res) {
        console.log('req.body.id:', req.body.id)
        Employee.findOneAndUpdate({ _id: req.body.id }, { convert_rate: req.body.convert_rate })
            .then(employee => res.json(employee))
            .catch(err => res.json(err));
    },
}

