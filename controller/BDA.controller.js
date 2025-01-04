import {validationResult} from "express-validator";
import BDA from "../model/BDA.model.js";
export const signIn = async(request,response,next)=>{
    let {email,password} = request.body;
    try{
        let BDA = await BDA.findOne({where:{email},raw:true});
        console.log(BDA);
        if(admin)
            return BDA.checkPassword(password,BDA.password) ? response.status(200).json({message:'sign in success',BDA}):response.status(401).json({error:"Bad request | Invalid password"});
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
  
        let {first_name,last_name,phone_no,email,password} = request.body;  
        let bda = await BDA.create({first_name,last_name,phone_no,email,password});
        return response.status(201).json({message: 'bda saved',bda}); 
     }
     catch(err){
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
     }
}

export const getbdadata = async(request,response,next)=>{
    try{
        let bda = await BDA.findAll(request.params.id)
        return response.status(201).json({message:"all data fetch succesfully",bda}) 

    }catch(err){
        console.log(err);
        return response.status(500).json({error:"Internal Server Error"})

    }
}

export const getbdaid = async(request,response,next)=>{
    try{
        let bda =await BDA.findByPk(request.params.id)
        return response.status(500).json({message:"data fetch successfully",bda})
    }catch(err){
        console.log(err);
        return response.status(500).json({error:"Internal Server Error"})
    }
}

export const deletebdadataid = async(request,response,next)=>{
    try{
        let bda =await BDA.findByPk(request.params.id);
        if(!bda)  return response.status(201).json({error: 'Id not found '}); 
       await bda.destroy();
        return response.status(201).json({message: 'Id data Destroy successfully ',bda}); 
    }
    catch(err){
       console.log(err);
       return response.status(500).json({error: "Internal Server Error"});
    }
}

export const updatebdaid = async(request,response,next)=>{
    try{
        let id = request.params.id;
        let bda = await BDA.findOne({where:{id}});
        if(!bda) return response.status(401).json({error:"id not found"})
            bda.first_name =request.body.first_name;
            bda.last_name = request.body.last_name;
            bda.phone_no = request.body.phone_no;
            bda.email = request.body.email;
            bda.password = request.body.password;
        await bda.save();
        return response.status(200).json({message:"update successfully",bda})

        
    }catch(err){
        console.log(err)
        return response.status(500).json({error:"Internal Server Error "})
    }

}
