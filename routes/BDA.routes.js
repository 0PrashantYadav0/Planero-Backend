import express from "express";
import { deletebdadataid, getbdadata, getbdaid, signIn, signUp, updatebdaid } from "../controller/BDA.controller.js";
import { body } from "express-validator";
import { updateadmindataId } from "../controller/admin.controller.js";
const router = express.Router();

router.post("/signup",
body("first_name","first_name is required").notEmpty(),
body("last_name","last_name is required").notEmpty(),
body("phone_no","phone_no is required").notEmpty(),
body("email","email id is required").notEmpty(),
body("email","email id is incorrect").isEmail(),
body("password","password is required").notEmpty(),
body("password","password must have at least 4 letter").isLength({min:4}),signUp);
router.post("/signin",signIn);
router.get("/getBDA",getbdadata);
router.get("/getBDA/:id",getbdaid);
router.delete("/deleteBDA/:id",deletebdadataid);
router.put("/updateBDA/:id",updatebdaid)
export default router;