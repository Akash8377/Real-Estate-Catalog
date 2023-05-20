const GetListRouter=require('express').Router();
const PropertyDetailsModel=require('../models/property-model');


GetListRouter.get('/getpropertylist',async(req,res)=>{
    try{
      const PropertyList= await PropertyDetailsModel.find({});
      // console.log(PropertyList)
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
      const PropertyList= await PropertyDetailsModel.find({prop});
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