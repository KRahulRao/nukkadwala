import mongoose from 'mongoose';
var deepPopulate = require('mongoose-deep-populate')(mongoose);

//============== Importing user models ==================

var userModel =  mongoose.model('usermodel',{
  name: { type: String, required: true },
  email: { type: String, required: true },
  pass:{
      hashVal: { type:String },
      salt: { type:String }
  }
});

let saveToDb= function(content,callback){
     content.save(callback);
};


module.exports= {
    userModel,
    saveToDb
};