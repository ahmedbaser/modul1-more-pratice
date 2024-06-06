//string

let fristName : string = 'mezba';

// number
let rool: number = 123;

//boolean 
let isAdmin : boolean = true;

// undefined

let x : undefined = undefined;

// null
let y : null = null;

// Array  

let friends : string[] = ['rachel', 'monica']

let eligibleRollList : number[] = [1, 3]

eligibleRollList.push(4);

// tuple ---> array---> order ----> type of values

let coordinates : [number, number] = [1,2];

let ageName:[number, string, boolean] = [50, 'Mr.X', true]

let decimal: number = 6;
let hex: number = 0xf00d;
let binary = 0b1010;
let octal = 0o744;


let color: string = 'blue';
color = 'red';

let fullname: string = `Bob Bobbington`;
let age: number = 27;

let fullName: string ='bottom hard';
let age1: number = 25;

let sentence: string = `hello,my name is ${fullname}
 i'll be ${age + 1} years old next month;

`;

let sentence1: string =`hello , my name is ${fullName} I am ${age1 + 1} year old`
// console.log(sentence1)
// console.log(sentence)

// This is equivalent to declaring sentence like so:
let sentence3: string = 'Hello, my name is ' + fullName + ".\n\n" + "I'll be " + (age + 1) + "years old next month";
// console.log(sentence3);

        // Array
// 1. way one to denote array in TypeScript 
let  list:number[] = [1, 2, 3];
       // way 2  

let list1:Array<number>=[1,2,3]; 

// console.log(list1)
let x1: [string, number];
x1 = ['hello',10]
// console.log(x1[0].substring(1));
// console.log(x1[5].toString());


enum Color {
        red,
        green,
        blue
}
enum Color1 {
  red = 1,
  green,
  blue
}

enum Color2 {
        red = 3,
        blue,
        green
}
let c2:Color2 = Color2.green;
let c1:Color1 = Color1.blue;
let c:Color = Color.blue;


console.log(c2)
console.log(c1)
console.log(c)

enum Color3 {
   red = 2,
   green,
   blue,


}

let  colorName: string = Color3[2];
// console.log(colorName)

//------//----------------//

// declare const maybe: unknown;
// const aNumber: number = maybe;

// if(maybe === true) {
//  const aBoolean: boolean = maybe;
//  const aString: string = maybe;
// }

// if(maybe ===  true) {
//         const aBoolean: boolean = maybe;
//         const aString: string = maybe;

// }

// if(typeof maybe === 'string') {
// const aString: string = maybe;
// const aBoolean: boolean = maybe; 
// }


// declare function getValue(key:string) {
// const str: string = getValue('myString');
// }


// Reference type ----> object 

const user :{
   fristName: string;
   midelName: string;
   lastName: string;
   isMarried: boolean;

} = {
    fristName: 'baser',
    midelName: 'ahmed',
    lastName: 'shiplu',
    isMarried: false    
}






