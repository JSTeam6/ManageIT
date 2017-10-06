const getCalendar = function () {
    const currentDate = new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let currentMonth = currentDate.getMonth()
    let monthName = monthNames[currentMonth]
    let currentYear = currentDate.getFullYear()

    $('#calendar').append(`<div id="year">${currentYear}</div>`)
    $('#year').append(`<div id="month">${monthName}<br></div>`)

    let numDays = 31
    if ((currentMonth == 3) || (currentMonth == 5) || (currentMonth == 8) || (currentMonth == 10)) {
        numDays = 30
    } else if ((currentMonth == 1)) {
        numDays = 28
        if ((currentYear % 4 == 0) && (currentYear % 100 != 0)) {
            numDays = 29
        }
        if (currentYear % 400 == 0) {
            numDays = 29
        }
    }

    let dayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

    const monthID = $('#month')
    monthID.append('<div id="monday">' + "Monday")
    const monday = $('#monday')
    monthID.append('<div id="tuesday">' + "Tuesday")
    const tuesday = $('#tuesday')
    monthID.append('<div id="wednesday">' + "Wednesday")
    const wednesday = $('#wednesday')
    monthID.append('<div id="thursday">' + "Thursday")
    const thursday = $('#thursday')
    monthID.append('<div id="friday">' + "Friday")
    const friday = $('#friday')
    monthID.append('<div id="saturday">' + "Saturday")
    const saturday = $('#saturday')
    monthID.append('<div id="sunday">' + "Sunday")
    const sunday = $('#sunday')
    const outerWeekdayDivs = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]

    let tempStartDay = dayOfWeek + 1
    for (let i = 1; i <= numDays; i++) {
        if (tempStartDay < 7) {
            outerWeekdayDivs[tempStartDay].append('<div class="empty">' + '<br>')
            tempStartDay++
            i--
        } else {
            let newDayDiv = document.createElement('div')
            newDayDiv.className = "BOX"
            newDayDiv.id = i + '_' + currentMonth + '_' + currentYear
            newDayDiv.textContent = i
            outerWeekdayDivs[dayOfWeek % 7].append(newDayDiv)
            dayOfWeek++
        }
    }
}

$(document).ready(getCalendar()
)