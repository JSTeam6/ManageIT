$(document).ready(function() {
    const calendarDiv = $('#calendar')
    const currentDate = new Date()

    calendarDiv.append('<div id="year">' + currentDate.getFullYear())
    const yearDiv = $('#year')

    const currentMonth = currentDate.getMonth()
    let monthToString

    switch (currentMonth) {
        case 0:
            monthToString = "January"
            break
        case 1:
            monthToString = "February"
            break
        case 2:
            monthToString = "March"
            break
        case 3:
            monthToString = "April"
            break
        case 4:
            monthToString = "May"
            break
        case 5:
            monthToString = "June"
            break
        case 6:
            monthToString = "July"
            break
        case 7:
            monthToString = "August"
            break
        case 8:
            monthToString = "September"
            break
        case 9:
            monthToString = "October"
            break
        case 10:
            monthToString = "November"
            break
        case 11:
            monthToString = "December"
            break
    }
    yearDiv.append('<div id="month">' + monthToString + '<br>')
    let month = currentDate.getMonth()
    let year = currentDate.getFullYear()
    let numDays = 31
    if ((month == 3) || (month == 5) || (month == 8) || (month == 10)) {
        numDays = 30
    }
    if ((month == 1)) {
        numDays = 28
        if ((year % 4 == 0) && (year % 100 != 0)) {
            numDays = 29
        }
        if (year % 400 == 0) {
            numDays = 29
        }
    }
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

    let firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
    let dayOfWeek = firstDayOfMonth.getDay()

    const outerDivSunday = document.getElementById('sunday')
    const outerDivMonday = document.getElementById('monday')
    const outerDivTuesday = document.getElementById('tuesday')
    const outerDivWednesday = document.getElementById('wednesday')
    const outerDivThursday = document.getElementById('thursday')
    const outerDivFriday = document.getElementById('friday')
    const outerDivSaturday = document.getElementById('saturday')
    switch (dayOfWeek) {
        case 0:
            monday.append('<div class="empty">' + '<br>')
            tuesday.append('<div class="empty">' + '<br>')
            wednesday.append('<div class="empty">' + '<br>')
            thursday.append('<div class="empty">' + '<br>')
            friday.append('<div class="empty">' + '<br>')
            saturday.append('<div class="empty">' + '<br>')
            break
        case 2:
            monday.append('<div class="empty">' + '<br>')
            break
        case 3:
            monday.append('<div class="empty">' + '<br>')
            tuesday.append('<div class="empty">' + '<br>')
            break
        case 4:
            monday.append('<div class="empty">' + '<br>')
            tuesday.append('<div class="empty">' + '<br>')
            wednesday.append('<div class="empty">' + '<br>')
            break
        case 5:
            monday.append('<div class="empty">' + '<br>')
            tuesday.append('<div class="empty">' + '<br>')
            wednesday.append('<div class="empty">' + '<br>')
            thursday.append('<div class="empty">' + '<br>')
            break
        case 6:
            monday.append('<div class="empty">' + '<br>')
            tuesday.append('<div class="empty">' + '<br>')
            wednesday.append('<div class="empty">' + '<br>')
            thursday.append('<div class="empty">' + '<br>')
            friday.append('<div class="empty">' + '<br>')
            break
    }

    for (let i = 1; i <= numDays; i++) {

        switch (dayOfWeek) {
            case 0:
                let divSunday = document.createElement('div')
                divSunday.className = "BOX"
                divSunday.id = i + '_' + month + '_' + year
                divSunday.textContent = i
                outerDivSunday.appendChild(divSunday)
                dayOfWeek++
                break
            case 1:
                let divMonday = document.createElement('div')
                divMonday.className = "BOX"
                divMonday.id = i + '_' + month + '_' + year
                divMonday.textContent = i
                outerDivMonday.appendChild(divMonday)
                dayOfWeek++
                break
            case 2:
                let divTuesday = document.createElement('div')
                divTuesday.className = "BOX"
                divTuesday.id = i + '_' + month + '_' + year
                divTuesday.textContent = i
                outerDivTuesday.appendChild(divTuesday)
                dayOfWeek++
                break
            case 3:
                let divWednesday = document.createElement('div')
                divWednesday.className = "BOX"
                divWednesday.id = i + '_' + month + '_' + year
                divWednesday.textContent = i
                outerDivWednesday.appendChild(divWednesday)
                dayOfWeek++
                break
            case 4:
                let divThursday = document.createElement('div')
                divThursday.className = "BOX"
                divThursday.id = i + '_' + month + '_' + year
                divThursday.textContent = i
                outerDivThursday.appendChild(divThursday)
                dayOfWeek++
                break
            case 5:
                let divFriday = document.createElement('div')
                divFriday.className = "BOX"
                divFriday.id = i + '_' + month + '_' + year
                divFriday.textContent = i
                outerDivFriday.appendChild(divFriday)
                dayOfWeek++
                break
            case 6:
                let divSaturday = document.createElement('div')
                divSaturday.className = "BOX"
                divSaturday.id = i + '_' + month + '_' + year
                divSaturday.textContent = i
                outerDivSaturday.appendChild(divSaturday)
                dayOfWeek = 0
                break
        }
    }
    //break

})