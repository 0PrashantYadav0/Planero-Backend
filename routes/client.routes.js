import express from "express";
import { deleteclientid, getclientdata, getclientid, signUp, updateclientid } from "../controller/client.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/signup",
body("first_name","first_name is required").notEmpty(),
body("last_name","last_name is required").notEmpty(),
body("phone_no","phone_no is required").notEmpty(),
body("email","email id is required").notEmpty(),
body("email","email id is incorrect").isEmail(),signUp)

router.get("/getClient",getclientdata);
router.get("/getClient/:id",getclientid);
router.delete("/deleteClient/:id",deleteclientid);
router.put("/updateClient/:id",updateclientid)

export default router;