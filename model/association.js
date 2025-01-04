import Event from "./event.model.js";
import Client from "./client.model.js";
import BDA from "./BDA.model.js";
import Vendor from "./vendor.model.js"
import Customer from "./customer.model.js"
import Address from "./address.model.js"


Client.hasOne(Event);
Event.belongsTo(Client);


BDA.hasMany(Event,{foreignKey:"bdaid"});
Event.belongsTo(BDA,{  
    foreignKey:"bdaid",targetKey:"id"
})

Client.hasMany(Address);
Address.belongsTo(Client);

BDA.hasMany(Address);
Address.belongsTo(BDA);

Vendor.hasMany(Address);
Address.belongsTo(Vendor);

Customer.hasMany(Address);
Address.belongsTo(Customer);


export{Event,BDA,Client,Address,Customer,Vendor}