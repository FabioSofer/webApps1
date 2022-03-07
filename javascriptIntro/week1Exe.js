"use strict"

const movie={
    title:'Lord of the Rings',
    genre:'Fantasy',
    duration:'182'
}

console.log(movie.title)
console.log(movie['title'])

movie.director='Peter Jackson'

console.log(movie)

for(const prop in movie){
    console.log('${prop} is ${movie[prop]}')//NOT WORKING NEED THE APOSTROPHE
}

const sameMovie=Object.assign({},movie)//if {}-> creates new obj reference
console.log(sameMovie)

const detailedMovie=Object.assign(movie,{budget:10000000})
//property added to the original object since no {}
console.log(detailedMovie)
//new attribute is the same in the original movie
console.log(movie)

const differentMovie={...movie}
differentMovie.villain='Sauron'

console.log(differentMovie)

console.log(movie)

//FUNCTIONS

function myFunc(a,b,c=1)//param=val -> default value
{
    return (a+b)*c
}
//function expr
// most popular way to declare funcs
let foo=function(a,b)
    {
        return a+b
    }

//'almost' the same thing, fucks with the scope
//if there is only 1 result, it adds return implicitly
let bar = (c,d)=>c-d


console.log(bar(3,2))
console.log(myFunc('4','3'))
console.log(foo(2,3))

//closure and scope

function greeter(name) {
    const myname = name ;    
    const hello = function () {
        return "Hello " + myname ;
        }
    return hello ; // we return the FUNCTION, not the result
 }
    const helloTom = greeter("Tom") ;
    const helloJerry = greeter("Jerry") ;
    console.log(helloTom()); //hello "remembers" the name is Tom 
    console.log(helloJerry()) ;


    //Objects
    //constructors
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isNew = ()=>(year>2000);
        }

let mycar = new Car('Eagle','Talon TSi', 1993);
console.log(mycar.isNew())