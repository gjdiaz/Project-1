// different results for putting "12" in each moment argument
// also only showing up in one cell, instead of all four 

var now = moment(12);
$("#projectstart").text(moment().startOf('hour').fromNow());

// # minutes ago
//moment().startOf('hour').fromNow();

// set hours of each project relative to finish date when a project has been added
// 21 is passed is as the hour 2100
/* const d = new Date();
d.setHours(21);
document.getElementById("demo").innerHTML = d;
*/