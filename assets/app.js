$(document).ready(function () {
    //Creating Javascript file that is connected to HTMl for date.//
var today = moment().format("Apr 3rd 21");  
console.log(today)
$(".o-clock").append(today);

var the9am = $("9am");
var the10am = $("10am");
var the11am = $("11am");
var the12am = $("12am");
var the1am = $("1pm");
var the2am = $("2pm");
var the3am = $("3pm");
var the4am = $("4pm");
var the5am = $("5pm");

function Timescheduler() {
    $("#today").moment().format("Apr 3rd 21");

    $(".o-clock").each(function ()) {
        var am = $(this).attr("am");
        var planner = localStorage.getItem(am);

        if(planner !==null) {
            $(this).children(".planner").val(planner);
        }
    });

}


var time = moment();

function timeintervals() {
    hour = time.numberofhours();
    $(".o-clock").each(function () {
        var currenthour = parseInt()
    }
}


}