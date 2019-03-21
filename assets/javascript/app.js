// Navbar Scrollspy
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollpos = window.pageYOffset;
        if (prevScrollpos > currentScrollpos) {
            document.getElementById('navbar').style.top = '0';
        } 
        else {
            document.getElementById('navbar').style.top = '-100px';
        }
  prevScrollpos = currentScrollpos;
}

// Collapsible 
let coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}