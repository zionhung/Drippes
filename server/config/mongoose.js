const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/drippes_api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

require('../models/models.js')