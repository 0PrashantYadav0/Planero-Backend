import {DataTypes} from "sequelize";
import sequelize from "../db/dbConfig.js";

const vendor = sequelize.define("vendor",{

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
    category:{
        type:DataTypes.STRING,
        allowNull:true
    }

});
sequelize.sync()
.then(result=>{
    console.log("vendor table created.....")
}).catch(err=>{
    console.log("Something wrong....");
})

export default vendor;