import {validationResult} from "express-validator";
import Events from "../model/event.model.js";

export const eventAdd = async(request,response,next)=>{
    try{
        const errors =  validationResult(request);
        if(!errors.isEmpty())
        return response.status(401).json({error: "Bad request"});
        
        let {event,start_date,end_date,amount,place,clientid,bdaid} = request.body; 
       
     let addevent=await Events.create({event,start_date,end_date,amount,place,clientid,bdaid})
        return response.status(201).json({message: 'event successfully add',addevent}); 
     }
     catch(err){
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
     }
}