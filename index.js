const day = document.getElementById('day')
const time = document.querySelector('#time')



const twoDigitFormat = number => {
    return number < 10 ? `0${number}` : `${number}`
}

const updatingTime = () => {
    let currentDate = new Date()

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const currentHour = twoDigitFormat(currentDate.getUTCHours() % 12 || 12)
    const currentMinute = twoDigitFormat(currentDate.getUTCMinutes())

    const AmPm = currentDate.getHours() < 12 ? `AM` : 'PM'


    day.textContent = daysOfWeek[currentDate.getUTCDay()]
    time.textContent = `${currentHour} : ${currentMinute} ${AmPm}`
}

setInterval(updatingTime, 1000)