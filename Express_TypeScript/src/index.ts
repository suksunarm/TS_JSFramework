import express from "express";
import testRoutes from "./routes/testRoutes"
import ProductRoutes from "./routes/ProductRoutes"


// สร้าง instance ของ express
const app = express()

// ทำให้ express สามารถอ่าน request body จาก client ได้
app.use(express.json())

app.use("/api",testRoutes)
app.use("/api",ProductRoutes)

// รัน server ด้วย port 3000
app.listen(4000, () => {
    console.log("Server is running on port 4000")
})

export default app
