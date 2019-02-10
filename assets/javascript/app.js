let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollpos = window.pageYOffset;
        if (prevScrollpos > currentScrollpos) {
            document.getElementsByClassName('navbar').style.top = '0';
        } 
        else {
            document.getElementsByClassName('navbar').style.top = '-100px';
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