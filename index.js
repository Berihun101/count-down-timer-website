const day = document.getElementById('day')
const hour= document.getElementById('hr')
const minute= document.getElementById('min')
const second = document.getElementById('sec')
const currentDate=document.getElementById('currentdate')
// Set the date we're counting down to
var countDownDate = new Date("Oct 31, 2023 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

 // Get the current date and time
 var now = new Date().getTime();
 
var rightNow= new Date()
 // Calculate the distance between now and the countdown date
 var distance =  countDownDate - now ;

 // Calculate days, hours, minutes, and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 // Display the countdown in the element with id="countdown"
//  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
//  + minutes + "m " + seconds + "s ";
 day.innerHTML=days + 'd'
 hour.innerHTML=hours + 'h'
 minute.innerHTML=minutes + 'm'
 second.innerHTML=seconds + 's'
 currentDate.innerHTML=rightNow

 // If the countdown is finished, display a message
 if (distance < 0) {
  clearInterval(x);
  document.getElementById("countdown").innerHTML = "EXPIRED";
 }
}, 1000);

// Get the width of the browser window
var windowWidth = window.innerWidth;




