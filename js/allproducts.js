// add products to array

let arr1 = []; // Product Title
let arr2 = []; // Product Price
let arr3 = []; // Product Quantity

function prodDet(num) {
    let prodTitle = "prodTitle" + num;
    let prodPrice = "prodPrice" + num;
    let qty = "qty" + num;
    let x =  document.getElementById(prodTitle).textContent;
    let y =  document.getElementById(prodPrice).textContent;
    let z =  document.getElementById(qty).value;
    let lenArr = arr1.length;
    arr1[lenArr] = x;
    arr2[lenArr] = y;
    arr3[lenArr] = z;

}

// calculate total
function calc() {
    tot = 0;
    for (let i = 0; i < arr2.length; i++) {
        val = Number(arr2[i]);
        qty = Number(arr3[i]);
        price = val*qty;
        tot += price;
        
    }
    return tot;
}

// Validate
function validation(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var cntact = document.getElementById("cntact").value;
    var address = document.getElementById("address").value;

    if(fname=="null" || fname=="" ){
    alert("Please Provide Your First Name!");
    }

    else if(lname=="null" || lname==""){
    alert("Please Provide Your Last Name!");
    }

    else if(email=="null" || email==""){
    alert("Please Provide the email address!"); 
    }

    else if(email.length < 8 || email.indexOf("@") == -1 || email.indexOf(".") == -1){
        alert("You have entered an invalid email address");
    }

    else if(cntact=="null" || cntact==""){
    alert("Please Provide a phone number!");
    }

    else if(cntact.length != 10){
        alert("You have entered an invalid phone number");
    }

    else if(address=="null" || address==""){
        alert("Please Provide your address!");
    }

    else{
        submit();
    }
}

// Submit the cart
function submit() {
    var tot = calc()

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var cntact = document.getElementById("cntact").value;
    var address = document.getElementById("address").value;

    document.getElementById("invoice").innerHTML = "<h2>Invoice</h2><hr><p>Name: " + fname + " " + lname + "<br>E-mail: " + email + "<br>Phone No: " + cntact + "</p><hr>";

    for (let i = 0; i < arr1.length; i++) {
        let prevHTML = document.getElementById("invoice").innerHTML
        document.getElementById("invoice").innerHTML = prevHTML + "<p>Product: " + arr1[i] + "<br>Price: Rs. " + arr2[i] + "<br>Quantity: " + arr3[i] + "</p>";
        
    }

    let prevHTML = document.getElementById("invoice").innerHTML
    document.getElementById("invoice").innerHTML = prevHTML + "<hr><div>Total : Rs. " + tot + "</div><hr>";

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
