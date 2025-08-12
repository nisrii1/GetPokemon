let myData=document.getElementById('f')
console.log(myData)


myData.addEventListener('submit',(e)=>{
    e.preventDefault()
    let pass=document.getElementById('p').value
    console.log(pass)
    if(pass.length<6){
        alert("Too small password")

    } 
    else if(pass.length>15){
        alert("Password is too big")
    }
    else{
       window.location.href='welcome.html'
    }
})