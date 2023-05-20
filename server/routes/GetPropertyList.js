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
        const {ppid}=req.query;
        console.log(ppid)
      const PropertyList= await PropertyModel.find({_id:ppid});
      console.log(PropertyList,1)
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


GetListRouter.put('/edit/:ppid',async(req,res)=>{
  try{
    const {ppid}=req.params;
    console.log(ppid)
    console.log(req.body)
    const Property=await PropertyModel.findOne({_id:ppid});
    // console.log(Property)
    if(Property){
      const UpdatedProperty=await PropertyModel.updateOne( { _id: ppid },req.body);
      console.log(UpdatedProperty)
      res.status(200).json({
        status:'success',
        result:UpdatedProperty
      })
    }else{
      res.status(400).json({
        status:'failure',
        result:'this id does not exist'
      })
    }
  }catch(err){
    console.error(err)
  }
})


module.exports=GetListRouter