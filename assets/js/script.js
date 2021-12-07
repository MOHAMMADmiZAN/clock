let clockContent
const clock = () => {
    let date = new Date()
    // let hours = date.getHours()
    // let minutes = date.getMinutes()
    // let seconds = date.getSeconds()
    // let format = hours >= 12 ? 'pm' : 'am'
    // hours = hours % 12
    // hours = hours ? hours : 12 // the hour '0' should be '12'
    // minutes = minutes < 10 ? '0' + minutes : minutes
    // seconds = seconds < 10 ? '0' + seconds : seconds
    // let time = `${hours}:${minutes}:${seconds}${format}`
    let time = date.toLocaleTimeString()
    clockContent = document.getElementById('time')
    clockContent.innerText = time;
    setInterval(clock, 1000)
}

let isTrue = true;
let toggle = document.getElementById('toggle')
toggle.addEventListener('click', (e) => {
    e.preventDefault()
    isTrue =!isTrue;
    if (isTrue===false) {
        clockContent.style.visibility = "hidden";
        toggle.innerText = 'Show';
    }else{
        clockContent.style.visibility = "visible";
        toggle.innerText = 'Hide';
    }
    console.log(isTrue)
  


})
