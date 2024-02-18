const express = require('express');

const router=express.Router();
const person=require('./../models/person');

// //define routes for /person
// router.get('/',(req,res)=>{
//     // handle get /person
// });

// router.post('/',(req,res)=>{
//     //Handle POST /person
// });




//POST ROUTE  TO ADD a PERSON
// get method srf order lakr de skta hai
router.post('/',async(req,res)=>{
    try{
      const data=req.body//assuming the request  body contains the person data
    
      // create a new person document using the mongoose model
     const newperson=new  person(data);
    
      //save the new person to the database
      const response=await newperson.save();
      console.log('data saved');
      res.status(200).json(response);
    
    }
    catch(err)
    {
      console.log(err);
      res.status(500).json({error:'internal server erro'})
    }
    })
    
    
//get method to get the person
    
router.get('/',async(req,res)=>{
      try{
         const data=await person.find();
         console.log('data fetch');
    res.status(200).json(data);
      }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
      }
    })

//>>>>>>>>>>>>>>>>>>>>>>>>paramaetrized endpoints(day6)<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

router.get('/:worktype',async(req,res)=>{
    try{
     const worktype=req.params.worktype;// extract the work type from the URL parameter
     if(worktype=='chef'||worktype=='manager'||worktype=='waiter')
     {
             const response=await person.find({work:worktype});
               
               console.log('response fetched');
               res.status(200).json(response);
     }
     else
     {
       res.status(404).json({error:"invalid work type"})
     }
    }
    catch(err)
    {
     console.log(err);
     res.status(500).json({error:'Internal server Error'});
    }
 
 })

 router.put('/:id',async(req,res)=>{
    try{
       const personid=req.params.id;//extract the id from the url parameter
       const updatedPersonData=req.body;//updated  data for the person

       const response=await person.findByIdAndUpdate(personid,updatedPersonData,{
        new:true,//return the updated document
        runValidators:true,//run mongoose validation
       })

       if(!response)
       {
        return res.status(404).json({error:'person not found'});
       }

       console.log('data updated');
       res.status(200).json(response);
    }catch(err)
    {
        console.log(err);
        res.status(500).json({error:'intenal server error'});
    }
 })

 router.delete('/:id',async(req,res)=>{
     
 try{
  const personid=req.params.id;//extract the id from the url parameter

  //assuming you have a person model
  const response=await person.findByIdAndDelete(personid);

  if(!response)
  {
    return res.status(400).json ({error:'person not found'});
  }
  console.log('data deleted');
  res.status(200).json({message:'persosn deleted succesfully'});
 }
 catch(err)
 {
  console.log(err);
  res.status(500).json({error:'internal server error'});
 }

 })
 
 
module.exports=router;
