export const classObject = () => {
    // การสร้าง class พื้นฐาน
    class Person {
        
        // สร้าง property ชื่อ name และกำหนด type เป็น string
        name: string
        
        // สร้าง constructor ที่รับค่า name และกำหนดค่าให้กับ property name
        constructor(name: string) {
            this.name = name
        }
        
        // สร้าง method ชื่อ greet ที่ return ค่าเป็น string
        greet(): string {
            return `Hello, my name is ${this.name}`
        }
    }

    // สร้าง Object จาก class Person และส่งค่า Stamp ไปให้ constructor 
    const person1 = new Person("Stamp")
    // เรียกใช้ method greet ของ object person1 
    console.log(person1.greet()) // Hello, my name is stamp

    class Car {
        // สร้าง property ชื่อ brand และกำหนด type เป็น string
        private speed: number = 0 // ไม่สามารถเข้าถึงจากภายนอกคลาส
    
        // สร้าง constructor ที่รับค่า brand และกำหนดค่าให้กับ property brand
        constructor(public brand: string) {}
    
        // สร้าง method ชื่อ accelerate ที่รับค่า amount และไม่ return ค่า
        accelerate(amount: number): void {
            this.speed += amount
            console.log(`${this.brand} speed: ${this.speed} km/h`)
        }
    }
    
    // สร้าง object จาก class Car และส่งค่า Toyota ไปให้ constructor
     const myCar = new Car("Toyota")
     myCar.accelerate(20) // Toyota speed: 20 km/h
    // myCar.speed = 50 // ❌ Error เพราะ speed เป็น private

    // คลาสแม่ Base class
    class Animal {
        // สร้าง property ชื่อ name และกำหนด type เป็น string
        protected name: string
        
        // สร้าง constructor ที่รับค่า name และกำหนดค่าให้กับ property name
        constructor(name: string) {
            this.name = name
        }
        
        // สร้าง method ชื่อ makeSound ที่ไม่ return ค่า
        makeSound(): void {
            console.log("Some sound")
        }
    }
    
    // คลาสลูก Inheritance
    class Dog extends Animal {
        // สร้าง property ชื่อ age และกำหนด type เป็น number
        private age: number
        
        // สร้าง constructor ที่รับค่า name และ age และส่งค่า name ไปให้ constructor
        // ของคลาสแม่ และกำหนดค่าให้กับ property age
        constructor(name: string, age: number) {
            super(name)
            this.age = age
        }
        
        // สร้าง method ชื่อ makeSound ที่ไม่ return ค่า
        makeSound(): void {
            console.log("Woof!")
        }
        
        // สร้าง method ชื่อ getInfo ที่ return ค่าเป็น string
        getInfo(): string {
            return `${this.name} is ${this.age} years old`
        }
    }

    const dog = new Dog("Buddy", 3)
    dog.makeSound()
    console.log(dog.getInfo()) // Buddy is 3 years old
}