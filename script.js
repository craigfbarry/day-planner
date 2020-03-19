
//Added time and date with moment.Js will sort out formatting later
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


for (i=0;i<9;i++){





var hourBlock = $("<div>")
var timeSlot = $("<div>")
var scheduleTask = $("<div>")
var saveButton = $("<div>")

//Code to dynamically add rows for each hour time slot and 3 columns for time, task, save button.
hourBlock.addClass("row time-block");
$("#workday").append(hourBlock);
timeSlot.addClass("col-2 hour").text(i+9+":00 AM");
hourBlock.append(timeSlot);
scheduleTask.addClass("col-8 future")
hourBlock.append(scheduleTask);
saveButton.addClass("col-2 saveBtn")
hourBlock.append(saveButton);
}
