function leapYear(year) {
  if (year % 4 === 0 && year % 400 === 0) {
    return "It is indeed a leap year";
  } else if (year % 4 === 0 && year % 100 === 0) {
    return "This is not a leap year";
  } else if (year % 4 === 0) {
    return "It is indeed a leap year";
  }
}

console.log(leapYear(2012)); //is leap year
console.log(leapYear(2100)); ///is NOT leap year
console.log(leapYear(2400)); //is leap year
