import express from 'express';
import {eventAdd} from "../controller/event.controller.js"
import {body} from "express-validator";

const router = express.Router();

router.post("/eventAdd",
body("event","event is required").notEmpty(),
body("start_date","star_date is required").notEmpty(),
body("end_date","end_date is required").notEmpty(),
body("amount","amount is required").notEmpty(),
body("place","place is required").notEmpty(),eventAdd)


export default router;