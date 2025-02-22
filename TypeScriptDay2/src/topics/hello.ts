// การสร้างตัวแปรพร้อมกับการ export ออกไปใช้งานในไฟล์อื่น
export const message = 'Hello, world!'
export const messageTH = 'สวัสดี, ชาวโลก!'

// การสร้างฟังก์ชันพร้อมกับการ export ไปใช้งานในไฟล์อื่น
export function hello() {
    console.log('I am from hello')
    console.log('ฉันมาจากฟังก์ชัน hello')
}

// การสร้างฟังก์ชันพร้อมกับการ export ไปใช้งานในไฟล์อื่น
export function welcome() {
    console.log('Welcome to JavaScript')
    console.log('ยินดีต้อนรับสู่ JavaScript')
}