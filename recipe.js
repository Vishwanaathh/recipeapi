const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    name:{
        type:String
    },
    ingredients:{
        type:String
    },
    instructions:{
        type:String
    }

})
const recipe=mongoose.model("recipe",schema);
module.exports=recipe;
