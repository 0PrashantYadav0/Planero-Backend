import {validationResult} from "express-validator";
import Client from "../model/client.model.js";
import { where } from "sequelize";
export const signUp = async(request,response,next)=>{
    try{
        const errors =  validationResult(request);
        if(!errors.isEmpty())
          return response.status(401).json({error: "Bad request"});
  
        let {first_name,last_name,phone_no,email} = request.body;  
        let client = await Client.create({first_name,last_name,phone_no,email});
        return response.status(201).json({message: 'client saved',client}); 
     }
     catch(err){
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
     }
}

export const getclientdata = async(request,response,next)=>{
   try{
      let client = await Client.findAll(request.params.id)
      return response.status(201).json({message:"data fetch successfully",client})

   }catch(error){
      console.log(error)
      return response.status(500).json({message:"Internal Server Error"})
   }
}

export const getclientid = async(request,response,next)=>{
   try{
       let client =await Client.findByPk(request.params.id)
       return response.status(500).json({message:"data fetch successfully",client})
   }catch(err){
       console.log(err);
       return response.status(500).json({error:"Internal Server Error"})
   }
}

export const deleteclientid = async(request,response,next)=>{
   try{
      let client =await Client.findByPk(request.params.id);
      if(!client)  return response.status(201).json({error: 'Id not found '}); 
     await client.destroy();
      return response.status(201).json({message: 'Id data Destroy successfully ',client}); 
  }
  catch(err){
     console.log(err);
     return response.status(500).json({error: "Internal Server Error"});
  }
}

export const updateclientid = async(request,response,next)=>{
   try{
      let id = request.params.id;
      let client = await Client.findOne({where:{id}});
      if(!client) return response.status(401).json({error:"id not found"})
          client.first_name =request.body.first_name;
          client.last_name = request.body.last_name;
          client.phone_no = request.body.phone_no;
          client.email = request.body.email;
          client.password = request.body.password;
      await client.save();
      return response.status(200).json({message:"update successfully",client})

   }catch(error){
      console.log(error)
      return response.status(500).json({error:"Internal Server Error"});
   }
}
