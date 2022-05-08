const mongoose = require("mongoose");

// categorySchema
// Step 1 :- creating the schema
const shop3Schema = new mongoose.Schema(
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
  const shop3 = mongoose.model("shop3",shop3Schema); // user => users

  module.exports=shop3;
