var readlineSync = require("readline-sync")

var birthDate = readlineSync.question("Enter Your Birth Date (dd-mm-yyyy) : ")

var luckyNo = parseInt(readlineSync.question("Enter your lucky number: "))

function isYourBirthdayLucky(birthDate, luckyNo) {
  let date = parseInt(birthDate.split('-').join(''))
  // console.log(date)
  let dateSum = 0

  while (date !== 0) {
    let unit = date % 10
    // console.log(unit)
    dateSum += unit
    date -= unit
    date /= 10
    // console.log(date)
  }

  // console.log(dateSum)
  if (dateSum % luckyNo === 0) {
    console.log("Yes, your birthday is lucky! :)")
  }
  else {
    console.log("No, your birthday is not lucky! :(")
  }
}

isYourBirthdayLucky(birthDate, luckyNo)