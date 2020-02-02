const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: [true, "Product-Name is required"],
    minlength: [3, "Product Name has a minimum length of 3 characters"],
    default: 'Default product name!'
  },
  product_url: {
    type: String,
    required: [true, "Product-Url is required"],
    default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQxnhaOozjXU89XyxtnDyCdZeM2QUEW_taZW7UumqhW1Alc0i&s'
  },
  unit_price: {
    type: Number,
    required: [true, "Product-Price is required"],
    default: 9
  },
  unit_count_name: {
    type: String,
    required: [true, "Product-count-name is required"],
    default: 'default count_name'
  }
},
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const OrderSchema = new mongoose.Schema({
  Customer_first_name: {
    type: String,
    required: [true, "Customer First Name is required"],
    minlength: [3, "Customer First Name has a minimum length of 3 characters"],
    default: 'Default Customer_first_name!'
  },
  Customer_last_name: {
    type: String,
    required: [true, "Customer Last Name is required"],
    minlength: [3, "Customer Last Name has a minimum length of 3 characters"],
    default: 'Default Customer Last Name!'
  },
  items: {
    type: Array,
    default: [{ product_id: 'default_product_id', product_name: 'default_product_name', unit_price: 1, qty: 1 }]
  },
  customer_address: {
    type: String,
    required: [true, "Order Address is required"],
    minlength: [3, "Order Address has a minimum length of 3 characters"],
    default: 'Default Order Address!'
  },
  Carrier_first_name: {
    type: String,
    required: [true, "Carrier First Name is required"],
    minlength: [3, "Carrier First Name has a minimum length of 3 characters"],
    default: 'Default Carrier_first_name!'
  },
  Carrier_last_name: {
    type: String,
    required: [true, "Carrier Last Name is required"],
    minlength: [3, "Carrier Last Name has a minimum length of 3 characters"],
    default: 'Default Carrier Last Name!'
  },
  delivery_date: {
    type: Date,
    required: [true, "Delivery Date is required"],
    default: '02-03-2020'
  },
  is_completed: {
    type: Boolean,
    default: false
  },
  review: {
    type: Map,
    default: { client_id: '', client_first_name: '', client_last_name: '', reviews: '', rate: 3 }
  },
  is_reviewed: {
    type: Boolean,
    default: false
  },
  count_money: {
    type: Number,
    min: 0,
    max: 10000,
    default: 0
  },
},
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const EmployeeSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "Employee-First-Name is required"],
      minlength: [3, "First Name has a minimum length of 3 characters"],
      default: 'Default first name!'
    },
    last_name: {
      type: String,
      required: [true, "Employee-Last-Name is required"],
      minlength: [3, "Last Name has a minimum length of 3 characters"],
      default: 'Default last name!'
    },
    password: {
      type: String,
      required: [true, "Employee-Password is required"],
      minlength: [6, "PassWord has a minimum length of 6 characters"],
      default: '999999'
    },
    profile_url: {
      type: String,
      required: [true, "Profile is required"],
      default: 'https://png.pngtree.com/png-clipart/20190122/ourmid/pngtree-cartoon-mouse-animal-cartoon-animals-png-image_527013.jpg'
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      default: 'rlopantzi@gmail.com'
    },
    authority: {
      type: Number,
      min: 0,
      max: 9,
      default: 0
    },
    avg_rate: {
      type: Number,
      min: 0,
      max: 5,
      default: 3
    },
    convert_rate: {
      type: Number,
      min: 0,
      max: 5,
      default: 3
    },
    count_money: {
      type: Number,
      min: 0,
      max: 10000,
      default: 0
    },
    tasks: {
      type: Array,
      default: ['default_order_id']
    }
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const CustomerSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "Employee-First-Name is required"],
      minlength: [3, "First Name has a minimum length of 3 characters"],
      default: 'Default first name!'
    },
    last_name: {
      type: String,
      required: [true, "Employee-Last-Name is required"],
      minlength: [3, "Last Name has a minimum length of 3 characters"],
      default: 'Default last name!'
    },
    password: {
      type: String,
      required: [true, "Employee-Password is required"],
      minlength: [6, "PassWord has a minimum length of 6 characters"],
      default: '999999'
    },
    profile_url: {
      type: String,
      required: [true, "Profile is required"],
      default: 'https://thumbs.gfycat.com/GlossyFaroffGoat-size_restricted.gif'
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      default: 'rlopantzi@gmail.com'
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      default: '3335 Susan St #200, Costa Mesa, CA 92626'
    },
    number: {
      type: Number,
      min: [10, "number should greagter than 10 digits"],
      max: [12, "number should less than 12 digits"],
      required: [true, "Phone-Number is required"],
      default: 2138224642
    },
    creaditcard: {
      type: Number,
      min: [12, "credit number should greagter than 12 digits"],
      max: [16, "credit number should greagter than 16 digits"],
      required: [true, "Credit info is required"],
      default: 1234567890123456
    },
    cart: {
      type: Array,
      default: []
    },
    orders: {
      type: Array,
      default: ['default_order_id']
    }
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

mongoose.model('Product', ProductSchema);
mongoose.model('Order', OrderSchema);
mongoose.model('Employee', EmployeeSchema);
mongoose.model('Customer', CustomerSchema);
