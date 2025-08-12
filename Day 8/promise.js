console.log("hii")

function jsonDemo(){
    const person={
        name:"Roshni",
        age:20,
        isStudent:true,
        hobbies:['photographing','stargazing','reading','singing']
    }
    //Theory of Json
    //Json is superset of object
    //Parse and STRINGIFY
//convert our object to JSON.string
const jsonString=JSON.stringify(person)
console.log("Stringified JSON: ",jsonString)
console.log(typeof(jsonString))
console.log(jsonString.toUpperCase())
console.log("The name is",jsonString.substring(9,12))

//convert String to Object
const parseObj=JSON.parse(jsonString)
console.log("Parsed Object is",parseObj.age)
console.log(typeof(parseObj))
}

//json
const person1={
    "name":"Max",
    "age":28,
    "hobbies":['dancing','reading']
}