$(function() {

$(".saveBtn").click(function(){
    var time = $(this).parent().attr("id"); //target the hour box
    var value = $(this).siblings(".task").val(); //target the text box

    localStorage.setItem(time, value);

});

function hourColor() {
    var hourNow = moment().hours();

    $(".time-block").each(function() {
        var hourBlock = parseInt($(this).attr("id").split("-")[1]);
        
        if (hourBlock < hourNow) {
            $(this).addClass("past");
        }
        else if (hourBlock === hourNow) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
};

hourColor();

$("#nineAm .task").val(localStorage.getItem("nineAm"));
$("#tenAm .task").val(localStorage.getItem("tenAm"));
$("#elevenAm .task").val(localStorage.getItem("elevenAm"));
$("#noonPm .task").val(localStorage.getItem("noonPm"));
$("#onePm .task").val(localStorage.getItem("onePm"));
$("#twoPm .task").val(localStorage.getItem("twoPm"));
$("#threePm .task").val(localStorage.getItem("threePm"));
$("#fourPm .task").val(localStorage.getItem("fourPm"));
$("#fivePm .task").val(localStorage.getItem("fivePm"));

//Date from moment.js
var time = moment().format("dddd, MMMM Do YYYY, h:mm:ss p");
var displayTime = document.getElementById("currentDay");
displayTime.textContent = time

});

//Pseudo Code
//Put everything into one function, be aware of scope
//Use moment.js to get time and date
//Save button will save to local storage
//If/else statements for block colors, maybe a loop

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



