
// Go Up
// Show when scrolled down
var goTop = document.getElementById("up");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTop.style.display = "block";
} else {
    goTop.style.display = "none";
}
}
