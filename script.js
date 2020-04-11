// $('#currentDay').innerHTML.moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

// (function() {
// var Time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// var displayTime = document.getElementById('currentDay');
// document.displayTime.innerHTML = Time
// console.log(Time);
// });

// var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// $('#currentDay').append($('<p>').html);

// $(document).ready(function() {};  <- will need this

var time = moment().format("dddd, MMMM Do YYYY, h:mm:ss p");
var displayTime = document.getElementById('currentDay');
displayTime.textContent = time

function putDiv() {
    var div1 = $("<div></div>").text("row");
    $(".container").after(div1);
}

// $(function() {
// $(".container").before("<div>Row1</div>");
//     $("div").attr("class", "hour");
//     $("div").attr("class", "row");
//     $("div").attr("class", "time-block");
    // $("div").attr("class", "col-md-10");
// $(".container").before("<div>Row2</div>");
// $(".container").before("<div>Row3</div>");
// $(".container").before("<div>Row4</div>");
// $(".container").before("<div>Row5</div>");
// $(".container").before("<div>Row6</div>");
// $(".container").before("<div>Row7</div>");
// $(".container").after("<div>Row8</div>");
// });



// function addElement(div) {
//     var d = document.querySelector(div);
//     var newElement = document.createElement(p)
// }

// var newDiv = document.createElement("div");
// newDiv.textContent = "A pleasure to meet you!";
// targetDiv.appendChild(newDiv);
// newDiv.setAttribute("class", "fancy");
// console.log(newDiv);
