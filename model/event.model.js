import {DataTypes} from "sequelize";
import sequelize from "../db/dbConfig.js";

const event = sequelize.define("event",{
    event_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    event:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    start_date:{
        type:DataTypes.STRING,
        allowNull:false
    },
    end_date:{
        type:DataTypes.STRING,
        allowNull:false
    },
    amount:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    place:{
        type:DataTypes.STRING,
        allowNull:false,
        
    },
    status:{
        type:DataTypes.STRING,
        defaultValue:"working"
    }

});
sequelize.sync()
.then(result=>{
    console.log("event table created.....")
}).catch(err=>{
    console.log("Something wrong....");
})

export default event;