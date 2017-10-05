function calendarFunc() {
    const calendar = $('#calendar')
    const currentDate = new Date()

    switch ($("#calendar > div").length) {
        case 0:
            calendar.append('<div id="year">' + currentDate.getFullYear())
            break
        case 1:
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
            calendar.append('<div id="month">' + monthToString + '<br>')
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
                        sunday.append('<div id="custom">' + i)
                        dayOfWeek++
                        break
                    case 1:
                        monday.append('<div id="custom">' + i)
                        dayOfWeek++
                        break
                    case 2:
                        tuesday.append('<div id="custom">' + i)
                        dayOfWeek++
                        break
                    case 3:
                        wednesday.append('<div id="custom">' + i)
                        dayOfWeek++
                        break
                    case 4:
                        thursday.append('<div id="custom">' + i)
                        dayOfWeek++
                        break
                    case 5:
                        friday.append('<div id="custom">' + i)
                        dayOfWeek++
                        break
                    case 6:
                        saturday.append('<div id="custom">' + i)
                        dayOfWeek = 0
                        break
                }
            }
            break

    }
}