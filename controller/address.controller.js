import { validationResult } from "express-validator";
import Address from "../model/address.model.js"
import { request, response } from "express";

export const Addresses = async(request,response,next)=>{
   try{
    const errors = validationResult(request);
    if(!errors.isEmpty())
      return response.status(401).json({error:"Bad request"})
    

    let{local,city,state,pincode,clientId,customerId,BDAId,vendorId}=request.body;
    console.log(local,city,state,pincode,clientId,customerId,BDAId,vendorId);
    let address=await Address.create({local,city,state,pincode,clientId,BDAId,vendorId,customerId})
    return response.status(201).json({massage:'address successfully add',address})
   }catch(err){
    console.log(err)
    return response.status(500).json({error:'Internal Server Error'})
   } 
}
export const fetchaddress = async(request,response,next)=>{
   try{
      let address = await Address.findAll(request.params.id)
      return response.status(201).json({message:"fetch data successfully",address})

   }catch(err){
      console.log(err);
      return response.status(500).json({error:"Internal Server Error"});
   }
}

export const getaddressId =async(request,response,next)=>{
   try{
      let address = await Address.findByPk(request.params.id)
      return response.status(201).json({message:"get data successfully",address});
   }catch(error){
      console.log(error)
      return response.status(201).json({error:"Internal Server Error"});
   }
}

export const deleteAddressId = async(request,response,next)=>{
   try{
      let address = await Address.findByPk(request.params.id);
      if(!address) return response.status(201).json({message:"id not found"})
         await address.destroy(); 
      return response.status(201).json({message:"data delete successfully",address});

   }catch(error){
      console.log(error)
      return response.status(500).json({error:"Intrnal Server Error"});
   }
}

export const updateAddressId = async(request,response,next)=>{
   try{
      let id = request.params.id;
      let address = await Address.findOne({where:{id}});
      if(!address) return response.status(401).json({message:"id not found"})
       address.local = request.body.local;
      address.city = request.body.city;
      address.state = request.body.state;
      address.pincode = request.body.pincode;
      
      await address.save();
      return response.status(201).json({message:"data update successfully"})
   }catch(error){
      console.log(error)
      return response.status(500).json({error:"Internal Server Error"})
   }
}