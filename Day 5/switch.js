const fruit='apple'
switch(fruit){
    case 'banana':
        console.log('yellow fruit')
        break;

    case 'apple':
        console.log('red fruit')
        break;
        
    case 'mango':
        console.log('green fruit')
        break;

    default:
        console.log('unknown fruit')    

}
let box=document.querySelector("div")
console.log(box)

function color(){
    const myColor=box.style.background
    switch(myColor){
        case 'red':
            box.style.background='pink'
            break
        case 'pink':
            box.style.background='green'
            break
        case 'green':
            box.style.background='yellow'
            break
        default:
            box.style.background='red'        
    }
}

