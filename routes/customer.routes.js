import express from "express";
import { DeletecustomerId, getcustomerdata, getcustomerid, signIn, signUp, updateCustomerId } from "../controller/customer.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/signup",
body("first_name","first_name is required").notEmpty(),
body("last_name","last_name is required").notEmpty(),
body("phone_no","phone_no is required").notEmpty(),
body("email","email id is required").notEmpty(),
body("email","email id is incorrect").isEmail(),
body("description","description is required").notEmpty(),
body("password","password is required").notEmpty(),
body("password","password must have at least 4 letter").isLength({min:4}),signUp);
router.post("/signin",signIn);

router.get("/getCustomer",getcustomerdata)
router.get("/getCustomer/:id",getcustomerid)
router.delete("/deleteCustomer/:id",DeletecustomerId);
router.put("/updateCustomer/:id",updateCustomerId);
export default router;