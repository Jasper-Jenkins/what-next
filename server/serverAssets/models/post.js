var mongoose =require('mongoose')
var Schema =mongoose.Schema
var schemaName="post"

var schema =new Schema({
  title:{type: String, required:true},
  userId:{type: String, required: true},
  userName:{type: String,required: true},
  body:{type: String, required:true},
  imgUrl:{type: String,},
  votes:{type:Number, required:true}
})

module.exports = mongoose.model(schemaName, schema)