const express=require('express');

const router=express.Router();

const menuitem=require('./../models/menuitem');


// similary u can write get and post methods for  menuitem (:

//POST Method to add a menu item
router.post('/',async(req,res)=>{
    try{
      const data=req.body;
      const newmenu=new menuitem(data);
      const response=await newmenu.save();
      console.log('data saved');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal server Error'});
    }
  })
  
  
  // get method to get thr mrnu item
  
  router.get('/',async(req,res)=>{
    try{
      const data=await menuitem.find();
      console.log('data fetched');
      res.status(200).json(data);
    }catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
  })

  module.exports=router;