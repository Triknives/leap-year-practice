
var leapYear = function(year) {
  var yearInt = parseInt(year);
  return (yearInt % 4 === 0 && (year % 100 != 0 || year % 400 === 0));
};


// USER INTERFACE
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    $("#result").text(leapYear($("#yearInput").val()));
  });
});



// var tests = [
//   [1993, false],
//   [2004, true],
//   [1900, false],
//   [2000,true]
// ]
//
// tests.forEach(function(thisTest) {
//   console.log(leapYear(thisTest[0]) === thisTest[1])
// });
// function() {}
