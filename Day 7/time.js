const now=new Date()
console.log(now)
console.log(now.getMinutes())
// console.log(now.getMonth()+1)
// console.log(now.getTime())
console.log(now.getSeconds())
console.log(now.getHours())//60 sec= 1min
console.log(now.getHours())//24hrs

let h=now.getHours();
let m=now.getMinutes();
let s=now.getSeconds();
console.log(`The current time is ${h}:${m}:${s}`)

function updateClock(){
    const time=new Date()
    let h=now.getHours();
    let m=now.getMinutes();
    let s=now.getSeconds();

    h=h<10?"0"+h:h
    m=m<10?"0"+m:m
    s=s<10?"0"+s:s
    const timeNow=`${h}:${m}:${s}`
    document.getElementById('time').textContent=timeNow
}

setInterval(updateClock,1000)

const age=19
let statement=age<18?"Hii Small kid":"Hello Uncle"
console.log(age)
console.log(statement)