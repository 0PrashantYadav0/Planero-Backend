import {DataTypes} from "sequelize";
import sequelize from "../db/dbConfig.js";

const customer = sequelize.define("customer",{
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
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:true
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    }

});
sequelize.sync()
.then(result=>{
    console.log("customer table created.....")
}).catch(err=>{
    console.log("Something wrong....");
})

export default customer;