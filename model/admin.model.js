import { DataTypes} from "sequelize";
import sequelize from "../db/dbConfig.js";

const admin = sequelize.define("admin",{
    admin_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type:DataTypes.STRING,
        allowNull:true
    },
    phone_no:{
        type:DataTypes.STRING,
        unique:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:true
    }
    

});
sequelize.sync()
.then(result=>{
    console.log("admin table created.....")
}).catch(err=>{
    console.log("Something wrong....");
})

export default admin;