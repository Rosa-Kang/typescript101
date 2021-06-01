{
//Optional Parameter
function printName(firstName: string, lastName?: string) {
    console.log(`${firstName} ${lastName}`);
}

//Default parameter
function printMessage(m: string='hello!') {
    console.log(m);
}

//Rest Parameter
function addNumbers(...num: number[]): number {
    return num.reduce((prev, curr)=> prev + curr);
}

}