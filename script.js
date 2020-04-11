// $('#currentDay').innerHTML.moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

// (function() {
// var Time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// var displayTime = document.getElementById('currentDay');
// document.displayTime.innerHTML = Time
// console.log(Time);
// });

// var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// $('#currentDay').append($('<p>').html);
var time = moment().format("dddd, MMMM Do YYYY, h:mm:ss p");
var displayTime = document.getElementById('currentDay');
displayTime.textContent = time
console.log(time);