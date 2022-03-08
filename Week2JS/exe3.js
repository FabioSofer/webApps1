"use strict"
//EX 3
const dayjs=require("dayjs")

function Exam(code,name,credits,date,score,laude=false){
    this.code=code;
    this.name=name;
    this.credits=credits;
    this.date=date;
    this.score=score;
    this.laude=laude;
}

function ExamList(){
    this.list=[]

    this.add=(exam)=>{
        this.list.push(exam);
    }

    this.find=(code)=>{
        /*let obj=this.list.find(exam => exam.code === code);
        if (obj)
            return obj
        return "No object found" */
        return this.list.filter(exam=>exam.code===code)[0]
    }
    this.afterDate=(date)=>{
        return this.list.filter(exam=>exam.date.isAfter(date))
    }
    this.listByDate=()=>{
        return [...this.list].sort((a,b)=>(a.date.isAfter(b.date)?1:-1));
    }
    this.listByScore=()=>{
        return [...this.list].sort((a,b)=>(a.score-b.score));
    }

    this.avg=() =>{
        return this.list.reduce((sum,val)=>sum+val.score,0)/this.list.length
    }
}


const wa1=new Exam("0x1010","webApp1",6,dayjs("2022-07-02"),30,true)
const sys=new Exam("CABODI","sys&devProg",10,dayjs("2022-07-12"),29)

let myList=new ExamList();
myList.add(wa1)
myList.add(sys)
console.log(myList.find("CABOD"))
console.log(myList.avg())

//CALL BACK EXAMPLE
function logQuote(quote) {
    console.log(quote);
    }

function createQuote(quote,callback) {
    const myQuote = `Like I always
    say, '${quote}'`;
    callback(myQuote);
    }
createQuote("Slow and steady wins the race",logQuote);
let i=0
const onesec = setInterval(()=> {
    console.log(`are we there yet? ${++i}`) ; // after 1s
    }, 1000) ;
console.log('We started the trip!');