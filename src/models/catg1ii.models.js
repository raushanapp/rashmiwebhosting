const mongoose = require("mongoose");

// categorySchema
// Step 1 :- creating the schema
const catg1iiSchema = new mongoose.Schema(
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
  const catg1ii = mongoose.model("catg1ii",catg1iiSchema); // user => users

  module.exports=catg1ii;
