const mongoose = require("mongoose");

// categorySchema
// Step 1 :- creating the schema
const catg4Schema = new mongoose.Schema(
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
  const catg4 = mongoose.model("catg4",catg4Schema); // user => users

  module.exports=catg4;
