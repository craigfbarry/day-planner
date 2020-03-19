
$("#currentDay").text(moment().format());

var hourBlock = $("<div>")
var timeSlot = $("<div>")
var scheduleTask = $("<div>")
var saveButton = $("<div>")

//Code to dynamically add rows for each hour time slot and 3 columns for time, task, save button.
hourBlock.addClass("row time-block");
$("#workday").append(hourBlock);
timeSlot.addClass("col-2 hour").text("7:00 AM");
hourBlock.append(timeSlot);
scheduleTask.addClass("col-8 future").text("Go to Gym");
hourBlock.append(scheduleTask);
saveButton.addClass("col-2 saveBtn").text("Save");
hourBlock.append(saveButton);
