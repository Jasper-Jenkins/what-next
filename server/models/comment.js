var mongoose =require('mongoose')
var Schema =mongoose.Schema
var schemaName="post"


var schema=new Schema ({
  votes: { type:Number,required:true},
  userId:{type:String, required: true},
  postId: {type:String, required:true},
  body: {type: String, required: true}
})

module.exports = mongoose.model(schemaName, schema)