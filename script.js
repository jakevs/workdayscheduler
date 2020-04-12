// $(function() {
// var Time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// var displayTime = document.getElementById('currentDay');
// document.displayTime.innerHTML = Time
// console.log(Time);
// });

// var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// $('#currentDay').append($('<p>').html);

// $(document).ready(function() {};  <- will need this

var time = moment().format("dddd, MMMM Do YYYY, h:mm:ss p");
var displayTime = document.getElementById("currentDay");
displayTime.textContent = time

$(function() {
});


$(".saveBtn").click(function(){
    var time = $(this).parent().attr("id"); //target the hour box
    var value = $(this).siblings(".task").val(); //target the text box

    localStorage.setItem(time, value);

})

$(".task").val(localStorage.getItem("nineAm"));

// function putDiv() {
//     var div1 = $("<div></div>").text("row");
//     $(".container").after(div1);
// };

// $(function() {

// var txt10 = $("<div></div>").text("row 10am");
// var txt11 = $("<div></div>").text("row 11am");
// var txt12 = $("<div></div>").text("row 12am");
// var txt1 = $("<div></div>").text("row 1pm");
// var txt2 = $("<div></div>").text("row 2pm");
// var txt3 = $("<div></div>").text("row 3pm");
// var txt4 = $("<div></div>").text("row 4pm");
// var txt5 = $("<div></div>").text("row 5pm");
//     $("div1").after(txt10, txt11, txt12, txt1, txt2, txt3, txt4, txt5);
// });   


// localStorage.setItem("user", JSON.stringify(user));




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
// $(".container").after("<div></div>");



// function addElement(div) {
//     var d = document.querySelector(div);
//     var newElement = document.createElement(p)
// }

// var newDiv = document.createElement("div");
// newDiv.textContent = "A pleasure to meet you!";
// targetDiv.appendChild(newDiv);
// newDiv.setAttribute("class", "fancy");
// console.log(newDiv);
