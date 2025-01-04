import {validationResult} from "express-validator";
import Vendor from "../model/vendor.model.js";

export const signIn = async(request,response,next)=>{
    let {email,password} = request.body;

    try{
        let vendor = await Vendor.findOne({where:{email},raw:true});
        console.log(vendor);

        if(vendor)
            return Vendor.checkPassword(password,vendor.password) ? response.status(200).json({message:'sign in success',vendor}):response.status(401).json({error:"Bad request | Invalid password"});

        return response.status(401).json({error:"Bad request | Invalid email id"});

    }catch(err){
        return response.status(500).json({error:"Internal server eroor"})
    }
}

export const signUp = async(request,response,next)=>{
    try{
        const errors =  validationResult(request);

        if(!errors.isEmpty())
            return response.status(401).json({error: "Bad request"});
  
        let {first_name,last_name,phone_no,email,password,category} = request.body;  
        let vendor = await Vendor.create({first_name,last_name,phone_no,email,password,category});

        return response.status(201).json({message: 'vendor saved',vendor}); 
    }catch(err){
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
    }
}

export const getvendordata = async(request,response,next)=>{
    try{
        let vendor = await Vendor.findAll(request.params.id)
        return response.status(201).json({message:"fetch data successfully",vendor});

    }catch(err){
        console.log(err)
        return response.status(500).json({error:"Internal Server Error"})
    }
}

export const getvendorid = async(request,response,next)=>{
    try{
        let vendor =await Vendor.findByPk(request.params.id)
        return response.status(201).json({message:"data get successfully",vendor})
    }catch(error){
        console.log(error)
        return response.status(500).json({error:"Internal Server Error"});
    }
}

export const DeletevendorId = async(request,response,next)=>{
    try{
        let vendor =await Vendor.findByPk(request.params.id);
        
        if(!vendor)  return response.status(201).json({error: 'Id not found '}); 
            await vendor.destroy();

        return response.status(201).json({message: 'Id data Destroy successfully ',vendor}); 
    }catch(err){
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
    }
}
export const updatevendorId = async(request,response,next)=>{
    try{
        let id = request.params.id;
        let vendor = await Vendor.findOne({where:{id}});

        if(!vendor) return response.status(401).json({error:"id not found"})
        vendor.first_name = request.body.first_name;
        vendor.last_name = request.body.last_name;
        vendor.phone_no = request.body.phone_no;
        vendor.email = request.body.email;
        vendor.category= request.body.category;
        await vendor.save();
        
        return response.status(201).json({message:"data update successfully",vendor})
    }catch(error){
        console.log(error)
        return response.status(500).json({error:"Internal server error"});
    }
}

