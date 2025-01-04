import express from "express";
import { DeleteadmindataId, getadmindata, getadmindataId, signIn, signUp, updateadmindataId } from "../controller/admin.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/signup",
body("username","username is required").notEmpty(),
body("phone_no","phone_no is requiered").notEmpty(),
body("email","email id is required").notEmpty(),
body("email","email id is incorrect").isEmail(),
body("password","password is required").notEmpty(),
body("password","password must have at least 4 letter").isLength({min:4}),signUp);
router.post("/signin",signIn);
router.get('/getAdmin',getadmindata);
router.get("/getAdmin/:id",getadmindataId);
router.delete('/deleteAdmin/:id',DeleteadmindataId);
router.put("/updateAdmin/:id",updateadmindataId);


export default router;