function isLeapYear(year){
	if(year % 400 === 0 && year % 4 === 0){
      return true
    } else {
      return false
    }
}
const myYear=2024;
const isMyYear=isLeapYear(myYear);
console.log('my year',isMyYear)
const herYear=2028;
const isHerYear=isLeapYear(herYear);
console.log('her year',isHerYear)