import express from "express"
import { Request , Response } from "express";

const router = express.Router()

interface Product {
    id: number
    name: string
    price: number
}

//สร้างตัวแปรชนิด array ที่มีข้อมูลเป็น object
const products: Product[] = [
]

// Get /products สำหรับดึงข้อมูลสินค้าทั้งหมด
router.get("/products", (_: Request, res: Response) : void => {
    //ส่ง res กลับไปที่ client
    res.json(products)
})

// ดึงข้อมูลสินค้าตาม id
router.get("/products/:id", (req: Request , res: Response ) : void => {
    // console.log(req.params.id)

    //รับค่า id จาก params
    const id = parseInt(req.params.id)

    // ค้นหาข้อมูลจาก array products ตาม id ที่รับมา
    const product = products.find(product => product.id === id)

    // ถ้าไม่พบข้อมูลให้ส่ง status code 404 กลับไปที่ client
    if (!product) {
        res.status(404).json({
            message: "Product not found"
        })
        return
    }

    //ส่ง response กลับไปที่ client
    res.json(product)
})

// Post /products สำหรับเพิ่มข้อมูลสินค้า 
router.post("/products", (req: Request, res: Response) : void => {
    // รับค่า request body จาก client 

    //ถ้าไม่มี request body
    if(!req.body) {
        res.status(400).json({
            message: "Missing request body !!!"
        })
        return
    }

    const { id , name , price } = req.body

  // ถ้าไม่ส่งข้อมูลมาให้ status code 404 กลับไปที่ client
  if (!id || !name || !price) {
    res.status(400).json({
        message: "Missing required fields: id, name , price"
    })
    return
}

    // เพิ่มข้อมูลลงใน array products
    products.push({ id , name , price })

    //ส่ง response กลับไปที่ client
    res.json({ message: "Product added successfully"})
    
})

// PUT /products/:id สำหรับแก้ไขข้อมูลสินค้า
router.put('/products/:id', (req: Request, res: Response): void => {
   
    // รับค่า id จาก params
    const id = parseInt(req.params.id)

    // รับค่า request body จาก client
    if (!req.body) {
        res.status(400).json({ message: 'Missing request body' })
        return
    }

    const { name, price } = req.body

    // ค้นหาข้อมูลจาก array products ตาม id ที่รับมา
    const product = products.find(product => product.id === id)

    // ถ้าไม่พบข้อมูลให้ส่ง status code 404 กลับไปที่ client
    if (!product) {
        res.status(404).json({ message: 'Product not found' })
        return
    }

    // แก้ไขข้อมูลใน array products
    product.name = name
    product.price = price

    // ส่ง response กลับไปที่ client
    res.json({ message: 'Product updated successfully' })
})

// DELETE /products/:id สำหรับลบข้อมูลสินค้า
router.delete('/products/:id', (req: Request, res: Response): void => {
    
    // รับค่า id จาก params
    const id = parseInt(req.params.id)

    // ค้นหาข้อมูลจาก array products ตาม id ที่รับมา
    const index = products.findIndex(product => product.id === id)

    // ถ้าไม่พบข้อมูลให้ส่ง status code 404 กลับไปที่ client
    if (index === -1) {
        res.status(404).json({ message: 'Product not found' })
        return
    }

    // ลบข้อมูลใน array products
    products.splice(index, 1) // ลบข้อมูลตั้งแต่ index ที่ระบุ 1 ตัว

    // ส่ง response กลับไปที่ client
    res.json({ message: 'Product deleted successfully' })
})
export default router