"use strict"

let a=5;
let b='5';
const myStr="test";
const myArr=[1,2,3]

myArr[0]="stringInsideArr";
console.log(myArr);
console.log(a+" "+myStr);

if (a===b)
    console.log("effettivamente uguale");
else if (a==b)
    console.log("careful!"); 
else console.log("effettivamente diversi");

console.log(typeof a);

{ // creating a new scope...
    let a = 5 ;
    console.log(a) ;
}

let alias = v ; //reference to the same arr, not real copy
let copy = Array.from(v) ; //actualy separate copy of arr values

for( let a of [4,7]) {
    console.log(a) ;
    }

for( let a of "hi" ) {
    console.log(a) ;
    }
//forEach(f)
//– f is a function that processes the element