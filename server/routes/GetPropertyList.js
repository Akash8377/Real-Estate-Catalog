const GetListRouter=require('express').Router();
const PropertyModel=require('../models/property-model');


GetListRouter.get('/getpropertylist',async(req,res)=>{
    try{
      const PropertyList= await PropertyModel.find({});
      console.log(PropertyList)
      if(PropertyList){
        res.status(201).json({
            status:"success",
            result:PropertyList})
      }else{
        res.status(400).json({
            status:"failure",
            result:'could not find'})
      }
    }catch(err){
        throw err
    }
})

GetListRouter.get('/search',async(req,res)=>{
    try{
        const prop=req.body;
      const PropertyList= await PropertyModel.find({prop});
      console.log(PropertyList)
      if(PropertyList){
        res.status(201).json({
            status:"success",
            result:PropertyList})
      }else{
        res.status(400).json({
            status:"failure",
            result:'could not find'})
      }
    }catch(err){
        throw err
    }
})

module.exports=GetListRouter