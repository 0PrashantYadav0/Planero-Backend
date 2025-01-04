import express from "express";
import AdminRouter from "./routes/admin.routes.js";
import BDARouter from "./routes/BDA.routes.js";
import CustomerRouter from "./routes/customer.routes.js";
import VendorRouter from "./routes/vendor.routes.js";
import ClientRouter from "./routes/client.routes.js";
import EventRouter from "./routes/event.routes.js"
import AddressRouter from "./routes/address.routes.js"
import "./model/association.js"
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use("/admin",AdminRouter);
app.use("/BDA",BDARouter);
app.use("/customer",CustomerRouter);
app.use("/vendor",VendorRouter);
app.use("/client",ClientRouter);
app.use("/event",EventRouter);
app.use("/address",AddressRouter);

app.listen(3000,()=>{
    console.log("server started.....");
})