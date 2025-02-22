export const variabletype = () => {

// ชนิดข้อมูลใน TypeScript มีทั้งหมด 3 กลุ่มได้แก่
// 1. Primitive Type
// 2. Advanced Type
// 3. Special Type

// 1. Primitive Type
// 1.1 number 
const age: number = 30
const pi: number = 3.14
const price: number = 100.55
const score: number = 35

console.log(age)
console.log(pi)
console.log(price)
console.log(score)

// 1.2 string
const fname: string = "John"
const address: string = "Bangkok"
const message: string = `Hellom ${fname}`

console.log(fname)
console.log(address)
console.log(message)

// 1.3 boolean
const isAdult: boolean = true
const isStudent: boolean = false

console.log(isAdult)
console.log(isStudent)

// 2. Advanced Type
// 2.1 Array
// 2.2 Tuple
// 2.3 Enum
// 2.4 Object

// 2.2 Array
const number:number[] = [1,2,3,4,5]
const names: string[] = ["John", "Jane" , "Joe"]
const people: Array<string> = ["Jack" , "Jim" , "Joey"]
const isAdults: boolean[] = [true,false,true]

console.log(number[4])
console.log(names[1])
console.log(people[2])
console.log(isAdults[1])

// 2.2 Tuple เก็บค่าที่ไม่เปลีย่นแปลง และเก็บได้หลาย type ไม่เหมือน array
const person: [string, number] = ["Tiger" , 30]

console.log(person[0])
console.log(person[1])

// 2.3 Enum
enum Color { //ฟิก type ให้มันอยู่แบบนั้น
    Red,
    Green,
    Blue
}

const color: Color = Color.Blue
console.log(color)

// 2.4 Object
const user: { name:string , age: number }[] = [
    {
        name: "Stamp",
        age: 30,
    },
    {
        name: "Kaew",
        age: 25
    }
]
    console.log(user[0].name,user[0].age)
    console.log(user[1].name,user[1].age)

// 3. Special Type
    // 3.1. any
    // 3.2. void
    // 3.3. never
    // 3.4. unknown

    // 3.1. any
    let data: any = 10
    data = 'Hello'
    data = true

    console.log(data)

    // 3.2. void
    const greet = (): void => {
        console.log('Hello')
    }

    greet()

    // 3.3. never ใช้สำหรับฟังก์ชันหรือโค้ดที่ ไม่มีวันสิ้นสุด หรือไม่สามารถ return ค่าใด ๆ ได้เลย
    const error = (message: string): never => {
        throw new Error(message)
    }

    // error('Error message')

    // 3.4. unknown  เช่นประกาศตัวแปร unknow มีค่า 10 ตอนเราจะเอาไปใช้มันจะเช็คก่อนว่า 10 นี่มันเป็นอะไร อ้อ เป็น number
    let userInput: unknown
    let userName: string

    userInput = 10
    userInput = 'Hello'

    typeof userInput === 'string' ? userName = userInput : error('Invalid input')
}


