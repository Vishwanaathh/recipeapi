const express=require('express');
require('dotenv').config();
const recipe=require('./recipe');

const cors=require('cors');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());
app.use(cors());
app.get('/:name',async(req,res)=>{
      const { name } = req.params;
      const data= await recipe.findOne({name});
      res.json(data);
});
app.get('/',async(req,res)=>{
    const data= await recipe.find({});
    res.json(data);
})
app.post('/create',async(req,res)=>{
    const recipee=req.body;
    await recipe.create(recipee);
    res.send("created");

});
mongoose.connect("mongodb+srv://admin:root@cluster0.mtdfqct.mongodb.net/RECIPES?retryWrites=true&w=majority&appName=Cluster")
.then(
app.listen(6969,()=>{
    console.log("app is running");
}));
