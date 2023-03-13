const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product name"],
    trim: true,
  },
  description: {
    type: String,
    requried: [true, "Please Enter product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 character"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  category: {
    type: String,
    required: [true,"Please Enter Product category"]
    
  },
  Stock:{
    type:Number,
    required:[true,"Please Enter product stock"],
    maxLength:[4,"Stock cannot exceeed 4 characters"],
    default:1
  },
  numOfReviews:{
    type:Number,
    default:0
  },
  reviews:[
    {
        name:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        }

    }
  ],
  createAt:{
    type:Date,
    default:Date.now
  }
});
module.exports=mongoose.model("Product",productSchema)