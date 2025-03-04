import express from "express"
import { Request , Response } from "express";


//สร้าง instance router ของ express

const router = express.Router()

// สร้าง route ที่แสดง res กลับไป
router.get("/", (_: Request, res: Response): void => {
    res.send("SAWAD DEE KUB")
})

router.get("/about", (_: Request, res: Response): void => {
    res.send("About Us!")
})

router.get("/contact", (_: Request, res: Response): void => {
    //ส่ง res กลับไปที่ client
    res.send("Contact Us!")
})



export default router