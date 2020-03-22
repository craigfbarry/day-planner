$(document).ready(function(){

//Added time and date with moment.Js will sort out formatting later
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


var hourPresent = moment().hour();
var schedule = [
    {time:9, task:""},
    {time:10, task:""},
    {time:11, task:"washing"},
    {time:12, task:"Drying"},
    {time:13, task:""},
    {time:14, task:""},
    {time:15, task:""},
    {time:16, task:""},
    {time:17, task:""},
];

for (i=0;i<9;i++){

localStorage.getItem("savedTime");


var hourBlock = $("<div>")
var timeSlot = $("<div>")
var scheduleTask = $("<textarea>")
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

//Logic to compare the current hour from moment.js to the time array and apply the right class(past,future,present)

if(schedule[i].time<hourPresent){
    scheduleTask.addClass("col-8 past");
}
else if(schedule[i].time==hourPresent) {
    scheduleTask.addClass("col-8 present").attr("input");
}
else {
    scheduleTask.addClass("col-8 future");
}


//scheduleTask.attr("hour",schedule[i].time);
//maybe remove one of these
scheduleTask.attr("id","task-time-"+schedule[i].time);


scheduleTask.text(schedule[i].task);
hourBlock.append(scheduleTask);


//Add data attributes and styling to save button, then append it to page.

saveButton.addClass("col-2 saveBtn fas fa-calendar-alt pt-4");
saveButton.attr("hour",schedule[i].time);
hourBlock.append(saveButton);
}


$(".saveBtn").on("click", function(){
    
    let saveTime = ($(this).attr("hour"));
    let saveTask = ($("#task-time-"+saveTime).val());
    console.log(saveTime);
    console.log(saveTask);
    


     

    


    localStorage.setItem("savedTime"+saveTime,saveTime);
    localStorage.setItem("savedTask"+saveTime,saveTask);

});


});