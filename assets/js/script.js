const clock = () => {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let format = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    let time = `${hours}:${minutes}:${seconds}${format}`
    let clockContent = document.querySelector('#time')
    clockContent.innerText = time
    setInterval(clock, 1000)

}
clock()
