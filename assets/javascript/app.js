let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollpos = window.pageYOffset;
        if (prevScrollpos > currentScrollpos) {
            document.getElementById('myTopnav').style.top = '0';
        } 
        else {
            document.getElementById('myTopnav').style.top = '-50px';
        }
  prevScrollpos = currentScrollpos;
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }