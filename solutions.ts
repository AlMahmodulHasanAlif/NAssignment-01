//Problem-1

function filterEvenNumbers(Number:number[]):number[]{
    return Number.filter(num => num % 2 === 0);
}

// const result = filterEvenNumbers([1, 2, 3, 4, 5, 6]); 
// console.log(result);



//Problem-2
function reverseString(String:string):string{
    return String.split('').reverse().join('');
}
// const reversed = reverseString("is it working?");
// console.log(reversed);  



//Problem-3
type StringOrNumber = string | number;

function checkType(stringOrNumber: StringOrNumber): string|number {
    if (typeof stringOrNumber === "string") {
        return ("String");
    } else {
        return ("Number");
    }
}
// const type1 = checkType(42);
// console.log(type1);



//Problem-4

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// const user = { id: 1, name: "John Doe", age: 21 };

// console.log(getProperty(user, "name"));



//Problem-5

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}
function toggleReadStatus(book: Book): Book & { isRead: boolean } {
    return { ...book, isRead: true };
}

// const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };


// console.log(toggleReadStatus(myBook));




//Problem-6

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const student = new Student("Alice", 20, "A");
console.log(student.getDetails());





//Problem-7

function getIntersection(one: number[], two: number[]): number[] {
    return one.filter(value => two.includes(value));
}

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6,7]));