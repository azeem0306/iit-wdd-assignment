/////// HOMEPAGE //////

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

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

/////// Quiz //////

// Display toggle
function toggleDisplay() {
    var t1 = document.getElementById("title1");
    var t2 = document.getElementById("title2");
    var btn1 = document.getElementById("quizBtn1");
    var btn2 = document.getElementById("quizBtn2");
    var terms = document.getElementById("terms");
    if (t1.style.display === "none") {
        t1.style.display = "block";
        t2.style.display = "none";

        btn1.style.display = "block";
        btn2.style.display = "none";


    } else {
        t1.style.display = "none";
        t2.style.display = "block";
        
        btn2.style.display = "block";
        btn1.style.display = "none";

        terms.style.display = "none";

    }
    startTimer(60);
}

// Timer
function startTimer(time) {
        counter = setInterval(timer, 1000);
        function timer() {
                document.getElementById("timer").textContent = time;
            time--;
            timeValue = time;
            if (time <= 0) {
                timeTaken = 60 - timeValue;
               
                clearInterval(counter);
                //stopTimer(counter);
                
            }
        }
    }

// Find result
function funcQuizResult() {
  let tot = 0;
  for (let i = 1; i <= 10; i++) {
      let q = "q" + i;
      let radioArray = document.form[q];
      tot = getRadioValue(radioArray, tot)
  }
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  msgbox(tot,false);

  clearInterval(counter);
  time = document.getElementById("timer").textContent;
  document.getElementById("timer").textContent = time;
  
}

// Get checked radio button value and calculate total
function getRadioValue(radioArray,tot) {
    let c = 0;
    for (let i = 0; i < radioArray.length; i++) {
        if (radioArray[i].checked) {
            tot += Number(radioArray[i].value)
        } else {
            c += 1;
        }
        
    }
    if (c === 4) {
        tot -= 1;
    }
    return(tot)
}

// Message box
function msgbox(tot,boxstate) {
    if(boxstate === false) {
        document.getElementById("box").style.display = "block";
        if (tot > 5) {
            document.getElementById("box").style.backgroundColor = "#cdebd7"
            document.getElementById("marks").innerHTML = "<h2>Congratulations!</h2><p>You have received " + tot + " marks for the quiz.";
        } else {
            document.getElementById("marks").innerHTML = "<h2>Oh No!</h2><p>You have received only " + tot + " marks for the quiz.";
        }
        boxstate = true

    } else {
        location.replace("../docs/home.html")
        boxstate = false
    }
}

// THUMBNAILS
function colorbg()
{
  var x=document.getElementById("selectid");
  var bgcolor=x.options[x.selectedIndex].value;
  document.iframe_a.document.body.style.backgroundColor=bgcolor;
}
function colortx()
{
  var x=document.getElementById("sid");
  var txcolor=x.options[x.selectedIndex].value;
  document.iframe_a.document.body.style.color = txcolor
  // v.style.color=txcolor;
} 
