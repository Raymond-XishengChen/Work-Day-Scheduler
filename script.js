// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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
  
  // Use dayjs() to get the real time
  // Get the current hour as a number to compare for coloring purpose
  var currentDay = $('#currentDay');
  var currentHour = dayjs().hour();



  // At start up, call functions to display real time and read saved schedules
  function init(){  
    displayTime();
    setInterval(displayTime, 1000);
    readLocalSchedules();
  }


  // Display time in header and update every second by calling setInterval
  function displayTime(){
    var currentTime = dayjs().format('dddd, MMMM D, YYYY h:mm:ss A');
    currentDay.text(currentTime);
  }


  // Read the time-block IDs from HTML file and compare to the real time hours
  // Change box colors accordingly to suit past, present and future statuses
  $(".time-block").each(function(){
    // Read the box IDs as they are labeled by the hours
    var hourId = $(this).attr("id");
    // Split the ID name and grab the numbers only
    var hourArray = hourId.split('-');
    var hourNumber = hourArray[1];

    // Compare the box number to the real time hour number
    // and set status
    if(hourNumber === currentHour){
      $(this).removeClass("future");
      $(this).addClass("present");
      console.log("it's present");
    }else if(hourNumber < currentHour){
      $(this).removeClass("present");
      $(this).addClass("past");
      console.log("it's past");
    }else if(hourNumber > currentHour){
      $(this).addClass("future");
      console.log("it's future");
    }
  });

  // Create on-click event to save the input content
  $(".saveBtn").on("click",function(event){
    event.preventDefault();
    // Read the input content from the text area as a child 
    var scheduleContent = $(this).siblings(".description").val();
    // Read the box ID as the parent for the hour number
    var scheduleHour = $(this).parent(".time-block").attr("id");
    localStorage.setItem(scheduleHour,scheduleContent);
  });

  // Read saved schedule content from local storage by the saved hours
  function readLocalSchedules(){
    for (let index = 9; index < 18; index++){
      $(`#hour-${index} .description`).val(localStorage.getItem(`hour-${index}`));
    }
  }

  init();
});


