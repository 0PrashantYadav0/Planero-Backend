import {validationResult} from "express-validator";
import Admin from "../model/admin.model.js";

export const signIn = async(request,response,next)=>{
    let {email,password} = request.body;
    try{
        let admin = await Admin.findOne({where:{email},raw:true});
        console.log(admin);
        if(admin)
            return Admin.checkPassword(password,admin.password) ? response.status(200).json({message:'sign in success',admin}):response.status(401).json({error:"Bad request | Invalid password"});
        return response.status(401).json({error:"Bad request | Invalid email id"});
    }
    catch(err){
        return response.status(500).json({error:"Internal server eroor"})
    }
}
export const signUp = async(request,response,next)=>{
    try{
        const errors =  validationResult(request);
        if(!errors.isEmpty())
        return response.status(401).json({error: "Bad request"});
        
        let {username,phone_no,email,password} = request.body;  
     let admin=await Admin.create({username,phone_no,email,password})
        return response.status(201).json({message: 'admin saved',admin}); 
     }
     catch(err){
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
     }
}

export const getadmindata = async(request,response,next)=>{
    try{
    let admin =await Admin.findAll(request.params.id);
    return response.status(201).json({message: 'all data fetch successfully ',admin}); 
}
catch(err){
   console.log(err);
   return response.status(500).json({error: "Internal Server Error"});
}
}


export const getadmindataId = async(request,response,next)=>{
    try{
    let admin =await Admin.findByPk(request.params.id);
    return response.status(201).json({message: 'Id data fetch successfully ',admin}); 
}
catch(err){
   console.log(err);
   return response.status(500).json({error: "Internal Server Error"});
}
}


export const DeleteadmindataId = async(request,response,next)=>{
    try{
    let admin =await Admin.findByPk(request.params.id);
    if(!admin)  return response.status(201).json({error: 'Id not found '}); 
   await admin.destroy();
    return response.status(201).json({message: 'Id data Destroy successfully ',admin}); 
}
catch(err){
   console.log(err);
   return response.status(500).json({error: "Internal Server Error"});
}
}


export const updateadmindataId = async(request,response,next)=>{
    try{
        let admin_id = request.params.id;
    let admin =await Admin.findOne({where:{admin_id}})
    if(!admin)  return response.status(401).json({error: 'Id not found '});
    admin.username=request.body.username;
    admin.phone_no=request.body.phone_no;
    admin.email=request.body.email;
    admin.password=request.body.password;
    
   await admin.save();
    return response.status(201).json({message: ' update successfully ',admin}); 
}
catch(err){
   console.log(err);
   return response.status(500).json({error: "Internal Server Error"});
}
}