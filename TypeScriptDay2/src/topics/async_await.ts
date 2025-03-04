export const async_await = () => {
    //ตัวอย่างการใช้งาน async await 
    async function getUserData () {
        
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/5")
            const data = await response.json()  //await คือการการันตีว่ามีค่าแล้วจึงทำต่อนะจ้ะ
            console.log("User data ", data)
        } catch (error) {
            console.log("Failed to fetch user data", error)
        }
    }

    // getUserData()

    interface User {
        id: number
        name: string
        email: string
        phone: string
    }

    async function getUserType(): Promise<User> { 
        const response = await fetch("https://jsonplaceholder.typicode.com/users/5")
        return response.json()
    }

    getUserType().then((user) => console.log("User data : ", user.phone))
}
   