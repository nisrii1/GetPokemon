let lights=document.querySelector('.light')
console.log(lights)

let currentLight=0;

//initialize first light 
lights[currentLight].classList.add('active')
setInterval(()=>{
    changeLight()
},3000)

const changeLight=()=>{
    //turn off the light
    lights[currentLight].classList.remove('active')
    //move to the next light
    currentLight++;
    //0 1 2 only
    if(currentLight>2){
        currentLight=0
    }
    //turn on the lights
    lights[currentLight].classList.add('active')
}
