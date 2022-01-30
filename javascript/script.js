let counter = 59;
let timeout;

function StartTimer() { 
  timedCount();
}

function timedCount() {
  document.getElementById("MainViewer").style.cssText = "
  border-top: 2px solid;  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s; ";

  if(counter >= 0 ) {
    let str = counter.toString().padStart(2, '0');
    document.getElementById("TimerDisplay").innerHTML = "TIME: " + str;
    //document.getElementById("MainViewer").style.borderTop = "6px solid #0000FF";
    counter--;
    timeout = setTimeout(timedCount, 1000);
  }
}