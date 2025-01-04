import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres://root:password@localhost:5432/database");

sequelize.authenticate()
.then(result=>{
    console.log("Database connected...");
}).catch(err=>{
    console.log(err);
});

export default sequelize;