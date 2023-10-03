//function for the query form
function myFunction(){
 var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	
 let name= document.quedetail.fname.value;
 if(name==""){
	  alert("Please enter your First Name");
	  return false;
 }
 let surname= document.quedetail.lname.value;
 if(surname==""){
	  alert("Please enter your Surname");
	  return false;
 }
 let email= document.quedetail.email.value;
 if(!email.match(mailformat)){
	  alert("Please enter your Email address");
	  return false;
 }

 let subj= document.quedetail.sub.value;
 if(subj==""){
	  alert("Please choose a Subject");
	  return false;
 }
 let det= document.quedetail.details.value;
 if(det==""){
	  alert("Please enter the details");
	  return false;
 }
 
//Displaying the summary and disappearing the query form
 document.getElementById("mysummary").style.display="block"
 document.getElementById("que").style.display="none"
 
//inserting the user inputs
 if(name!==""){
   document.getElementById("FNAME").innerHTML = name;
 }
 
 if(surname!==""){
   document.getElementById("LNAME").innerHTML = surname;
 }
 
 if(email!==""){
   document.getElementById("EMAIL").innerHTML = email;
 }
 
 if(subj!==""){
   document.getElementById("SUBJECT").innerHTML = subj;
 }
 
 if(det!==""){
   document.getElementById("DETAILS").innerHTML = det;
 }
}

//function for edit button
function editFormFunction(){
	document.getElementById("mysummary").style.display="none";
	document.getElementById("que").style.display="block"
}

//function for the submit button
function submitFormFunction(){
	document.getElementById("mysummary").value="";
	alert("We will get back to you soon!")
}
	
