//fetch & promise and API

//promise denotes something that will happen in future
//pending state 
//success/failure
//then/catch

let p=new Promise((resolve,reject)=>{
    reject("Failure not good")
})

p.then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})
console.log(p)

//simple promise in action

let myCal=new Promise((resolve,reject)=>{
    let num=3+2
    if(num==5){
        resolve("success")
    }else{
        reject("failure")
    }
})

myCal
    .then((message)=>{
        console.log("Good News",message)
    })
        .catch((error)=>{
        console.error("Oh no",error)
    })

    