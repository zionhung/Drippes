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
    default: 'default count name'
  }
},
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const ReviewSchema = new mongoose.Schema({
  client_first_name: {
    type: String,
    required: [true, "Client First Name is required"],
    minlength: [3, "Client First Name has a minimum length of 3 characters"],
    default: 'Default Client First Name!'
  },
  client_last_name: {
    type: String,
    required: [true, "Product Name is required"],
    minlength: [3, "Product Name has a minimum length of 3 characters"],
    default: 'Default Product Name!'
  },
  reviews: {
    type: String,
    required: [true, "Product-count-name is required"],
    default: 'default reviews info'
  },
  rate: {
    type: Number,
    min: 0,
    max: 5,
    default: 3
  }
},
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const OrderSchema = new mongoose.Schema({
  items: {
    type: Array,
    default: [{ product_id: 'product_id', product_name: 'default_product', qty: 0 }]
  },
  address: {
    type: String,
    required: [true, "Order Address is required"],
    minlength: [3, "Order Address has a minimum length of 3 characters"],
    default: 'Default Order Address!'
  },
  carrier: {
    type: String,
    required: [true, "Carrier name is required"],
    minlength: [3, "Carrier name has a minimum length of 3 characters"],
    default: 'Default carrier name!'
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
    default: { client_id: '', client_first_name: '', client_last_name: '', reviews: '', rate: 0 }
  }
},
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

//some changes 
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
    week_count_money: {
      type: Number,
      min: 0,
      max: 10000,
      default: 1
    },
    tasks: [OrderSchema]
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

mongoose.model('Product', ProductSchema);
mongoose.model('Order', OrderSchema);
mongoose.model('Employee', EmployeeSchema);
