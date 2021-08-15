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
    // let time = date.toLocaleTimeString()
    let dateLocal = date.toLocalDateString()
    let clockContent = document.querySelector('#time')
    let dateContent = document.querySelector('#date')
    clockContent.innerText = time
    dateContent.innerText = dateLocal
    setInterval(clock, 1000)

}
clock()
