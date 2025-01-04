import {validationResult} from "express-validator";
import Customer from "../model/customer.model.js";
import address from "../model/address.model.js";
export const signIn = async(request,response,next)=>{
    let {email,password} = request.body;
    try{
        let customer = await Customer.findOne({where:{email},raw:true});
        console.log(customer);
        if(customer)
            return Customer.checkPassword(password,customer.password) ? response.status(200).json({message:'sign in success',customer}):response.status(401).json({error:"Bad request | Invalid password"});
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
  
        let {first_name,last_name,phone_no,email,password,description} = request.body;  
        let customer = await Customer.create({first_name,last_name,phone_no,email,password,description});
        return response.status(201).json({message: 'customer saved',customer}); 
     }
     catch(err){
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
     }
}

export const getcustomerdata = async(request,response,next)=>{
    try{
        let customer = await Customer.findAll(request.params.id)
        return response.status(201).json({message:"fetch data successfully",customer});

    }catch(err){
        console.log(err)
        return response.status(500).json({error:"Internal Server Error"})
    }
}

export const getcustomerid = async(request,response,next)=>{
    try{
        let customer =await Customer.findByPk(request.params.id)
        return response.status(201).json({message:"data get successfully",customer})
    }catch(error){
        console.log(error)
        return response.status(500).json({error:"Internal Server Error"});
    }
}

export const DeletecustomerId = async(request,response,next)=>{
    try{
    let customer =await Customer.findByPk(request.params.id);
    if(!customer)  return response.status(201).json({error: 'Id not found '}); 
   await customer.destroy();
    return response.status(201).json({message: 'Id data Destroy successfully ',customer}); 
}
catch(err){
   console.log(err);
   return response.status(500).json({error: "Internal Server Error"});
}
}

export const updateCustomerId = async(request,response,next)=>{
    try{
        let id = request.params.id;
        let customer = await Customer.findOne({where:{id}});
        if(!customer) return response.status(401).json({error:"id not found"})
            customer.first_name = request.body.first_name;
        customer.last_name = request.body.last_name;
        customer.phone_no = request.body.phone_no;
        customer.email = request.body.email;
        customer.description= request.body.description;

        await customer.save();
        return response.status(201).json({message:"data update successfully",customer})
    }catch(error){
        console.log(error)
        return response.status(500).json({error:"Internal server error"});
    }
}

