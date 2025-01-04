import {DataTypes} from "sequelize";
import sequelize from "../db/dbConfig.js";

const client = sequelize.define("client",{ 
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    first_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone_no:{
        type:DataTypes.STRING,
        unique:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }

});
sequelize.sync()
.then(result=>{
    console.log("client table created.....")
}).catch(err=>{
    console.log("Something wrong....");
})

export default client;