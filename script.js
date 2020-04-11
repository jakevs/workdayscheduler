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

$(".container").html("<h1>Hello friends!</h1>");


// function addElement(div) {
//     var d = document.querySelector(div);
//     var newElement = document.createElement(p)
// }

// var newDiv = document.createElement("div");
// newDiv.textContent = "A pleasure to meet you!";
// targetDiv.appendChild(newDiv);
// newDiv.setAttribute("class", "fancy");
// console.log(newDiv);
