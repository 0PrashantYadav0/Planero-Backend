import express from 'express'
import {Addresses, deleteAddressId, fetchaddress, getaddressId, updateAddressId} from "../controller/address.controller.js"
import {body} from "express-validator"

const router = express.Router()

router.post("/Addresses",
    body("local","local is required").notEmpty(),
    body("city","city is required").notEmpty(),
    body("state","state is required").notEmpty(),
    body("pincode","pincode is required").notEmpty(),Addresses);

    router.get("/Addresses",fetchaddress);
    router.get("/Addresses/:id",getaddressId);
    router.delete("/Addresses/:id",deleteAddressId);
    router.put("/updateAddresses/:id",updateAddressId);


    export default router;