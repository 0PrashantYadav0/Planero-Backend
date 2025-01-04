import { DataTypes} from "sequelize";
import sequelize from "../db/dbConfig.js";

const address = sequelize.define("address",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    local:{
        type:DataTypes.STRING,
        allowNull:false
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false
    },
    state:{
        type:DataTypes.STRING,
        allowNull:false
    },
    pincode:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
    

});
sequelize.sync()
.then(result=>{
    console.log("address table created.....")
}).catch(err=>{
    console.log("Something wrong....");
})

export default address;