var currentDay = $('#currentDay');
var currentHour = dayjs().hour();
// var currentHour = 17;

displayTime();
setInterval(displayTime, 1000);
console.log(currentHour);

//Display time in header and update every second by calling setInterval
function displayTime(){
  var currentTime = dayjs().format('dddd, MMMM D, YYYY h:mm:ss A');
  currentDay.text(currentTime);
}

// for (i=0, i<)
// var timeBlocks = 
$(".time-block").each(function(){
  var hourId = $(this).attr("id");
  console.log(hourId);
  var hourArray = hourId.split('-');
  var hourNumber = hourArray[1];
  console.log(hourNumber);

  if(hourNumber === currentHour){
    $(this).removeClass("future");

    $(this).addClass("present");
    console.log("its present");
  }else if(hourNumber < currentHour){

    $(this).removeClass("present");
    $(this).addClass("past");
    console.log("its past");
  }else if(hourNumber > currentHour){
    $(this).addClass("future");

    console.log("its future");
  }
});
// console.log(timeBlocks);


  


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });
