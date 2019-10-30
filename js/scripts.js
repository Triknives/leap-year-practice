var leapYear = function(year) {
  return (year % 4 === 0 && (year % 100 != 0 || year % 400 === 0));
};



var tests = [
  [1993, false],
  [2004, true],
  [1900, false],
  [2000,true]
]

tests.forEach(function(thisTest) {
  console.log(leapYear(thisTest[0]) === thisTest[1])
});



// $(document).ready(function() {
//
// });
