import express from "express";
import { DeletevendorId, getvendordata, getvendorid, signIn, signUp, updatevendorId } from "../controller/vendor.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/signup",
body("first_name","first_name is required").notEmpty(),
body("last_name","last_name is required").notEmpty(),
body("phone_no","phone_no is required").notEmpty(),
body("email","email id is required").notEmpty(),
body("email","email id is incorrect").isEmail(),
body("category","category is required").notEmpty(),
body("password","password is required").notEmpty(),
body("password","password must have at least 4 letter").isLength({min:4}),signUp);
router.post("/signin",signIn);
router.get("/getVendor",getvendordata);
router.get("/getVendor/:id",getvendorid);
router.delete("/deleteVendor/:id",DeletevendorId);
router.put("/updateVendor/:id",updatevendorId);

export default router;