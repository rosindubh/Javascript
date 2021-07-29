// phil welsby - 29 july 2021
// code by Branmdon for alarm challange

let weekendAlarm = "No alarm needed."
let weekdayAlarm = "Wake up it is 7am!!!"
let time = new Date()
if (time.getDay() = 1||2||3||4||5 && time.getHours() == 7) {
    console.log(weekdayAlarm)
} else if (time.getDay() = 0||6) {
    console.log(weekendAlarm)
}
