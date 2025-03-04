import { resolve } from "styled-jsx/css"

export const asyncpromises = () => {
    //ตัวอย่างการสร้างฟังก์ชันที่มีการคืนค่าแบบ Promise
    function simulateNetworkRequest(shouldSuccess: boolean): Promise<string> {
        //Pending สถานะที่ยังไม่เสร็จ
        //เมื่อเราสร้าง Pormise ขึ้นมา มันจะอยู๋ในสถานะ Pending ก่อน
        console.log("เริ่มต้นการทำงาน Promise - สถานะ Pending")

        return new Promise<string>((resolve, reject) => {
            //ลองการทำงานที่ใช้เวลา 2 วิ
            setTimeout(() => {
                if(shouldSuccess) {
                    //เมื่อเวลา 2 วิ ผ่านไปแล้ว จะเข้าสถานะ สำเร็จหรือ Resolve
                    console.log("สำเร็จ Success")
                    resolve("สำเร็จได้ข้อมูลกลับมาแล้ว We got the data back!!!")
                } else {
                    console.log("การทำงานไม่สำเร็จ - สถานะ Rejected")
                    reject("ไม่สามารถเชื่อมต่อเครือข่ายได้")
                }
            }, 2000)
        })
    }
    //ตัวอย่างการทำงานกับ Promise แบบสถานะสำเร็จ (Resolved)
// simulateNetworkRequest(true)

//  //ตัวอย่างการทำงานกับ Promise แบบสถานะสำเร็จ (Rejected)
//  simulateNetworkRequest(false)

    //ตัวอย่างการใช้งานแบบ then และ catch
    function promiseChainExample(): void {
        //สิ่งที่ดึงมาจาก then จะเป็น resolved เสมอ
        simulateNetworkRequest(true)
            .then((result) => {
                console.log("ข้อมูลที่ได้รับ : ", result)
            })
            .then(() => {
                console.log("ทำงานต่อจากการทำงานแรก")
            })
            .catch((error) => {
                console.log("เกิดข้อผิดพลาด : ",error)
            })
            .finally(() => {
                console.log("จบการทำงาน")
            })
    }
    promiseChainExample()
}

