
//Added time and date with moment.Js will sort out formatting later
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


var hourPresent = moment().hour();
var schedule = [
    {time:9, task:""},
    {time:10, task:""},
    {time:11, task:""},
    {time:12, task:""},
    {time:13, task:""},
    {time:14, task:""},
    {time:15, task:""},
    {time:16, task:""},
    {time:17, task:""},
];

for (i=0;i<9;i++){

var hourBlock = $("<div>")
var timeSlot = $("<div>")
var scheduleTask = $("<div>")
var saveButton = $("<div>")

//Code to dynamically add rows for each hour time slot and 3 columns for time, task, save button.
hourBlock.addClass("row time-block");
$("#workday").append(hourBlock);
timeSlot.addClass("col-2 hour");
if(schedule[i].time>12){
    timeSlot.text((schedule[i].time-12) +":00 PM");
}
else if (schedule[i].time===12){
    timeSlot.text(schedule[i].time +":00 PM");
}
else{
    timeSlot.text(schedule[i].time +":00 AM");
}
hourBlock.append(timeSlot);

if(schedule[i].time<hourPresent){
    scheduleTask.addClass("col-8 past");
}
else if(schedule[i].time==hourPresent) {
    scheduleTask.addClass("col-8 present");
}
else {
    scheduleTask.addClass("col-8 future");
}

hourBlock.append(scheduleTask);
saveButton.addClass("col-2 saveBtn");
hourBlock.append(saveButton);
}
