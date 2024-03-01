const subbtn = document.getElementById("sub-btn");
const container  = document.getElementById("cont")
const currdate = new Date()
const hours = document.getElementById("hours")
subbtn.onclick = () =>{
    subbtn.innerText = "SUBMITED"
    setInterval(() => {
        countdown()
    }, 1000 );
    
}
const countdown = () => {
const inputdate = document.getElementById("inputdate")
const enddate = new Date(inputdate.value)
const diff = (enddate - currdate) / 1000
hours.value = ( Math.floor(diff / 3600) % 24)
document.getElementById("days").value = Math.floor(diff / 3600 / 24)
document.getElementById("minutes").value = ( Math.floor(diff / 60) % 60)
document.getElementById("seconds").value = Math.floor(diff)%60
}

