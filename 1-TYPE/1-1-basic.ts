{
 // JavaScript 변수 선언 방식 : let or const
 // Javascript 의 data type --> Primitive type (number, string, boolean, bigint , symbol, null, undefined) 
 //                             vs
 //                         --> Object type (function, array ...) 

// ts Types number
const num:number = 1;

// string
const str:string = 'hello';

//boolean
const bln:boolean = false;

//undefined
let age: number | undefined;
age = undefined;
age = 1;

//null
let per2: string | null;

//unknown 👎🏻
let notSure: unknown =0;

//any 👎🏻
let anything: any =0;
anything = 'hello';

// void --> 주로 함수에서 리턴하지 않을 때. 변수에 사용하지 않음. 
function print(): void {
    console.log('hello');
    return;
}

//never --> throwError 나 while 둘 중 하나만 return 할 수 있다. 함수에서 절대 리턴되지 않는 경우에만 사용. 변수에 사용하지 않음.
function throwError(message: string):never {
    // message --> server (log)
    throw new Error(message);
    while(true) {

    }
}

//object 👎🏻
let obj:object;

// TypeScript
function add(num1: number, num2: number): number  {
    return num1 + num2
}

function fetchNum(id: string): Promise <number> {
   //..
    return new Promise((res, rej)=> {
        res(100);
    })
}


}