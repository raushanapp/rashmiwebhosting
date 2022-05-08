const mongoose = require("mongoose");

// categorySchema
// Step 1 :- creating the schema
const shop2Schema = new mongoose.Schema(
    {
      id:{type:Number,required:true},
      img:{type:String,required:true},
      title:{type:String,required:true},
      desc:{type:String,required:true},
     
    },
    {
      versionKey: false,
      timestamps: true, // createdAt, updatedAt
    }
  );
  
  // Step 2 : creating the model
  const shop2 = mongoose.model("shop2",shop2Schema); // user => users

  module.exports=shop2;
