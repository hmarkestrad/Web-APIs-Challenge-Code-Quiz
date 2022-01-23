let counter = 59;
let timeout;

function StartTimer() { 
  timedCount();
}

function timedCount() {
 

  if(counter >= 0 ) {
    let str = counter.toString().padStart(2, '0');
    document.getElementById("TimerDisplay").innerHTML = "TIME: " + str;
    //document.getElementById("MainViewer").style.borderTop = "6px solid #0000FF";
    counter--;
    timeout = setTimeout(timedCount, 1000);
  }
}