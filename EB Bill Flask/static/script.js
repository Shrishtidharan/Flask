//progress bar in login page to open signup page
$(document).ready(function() {
  $('#signupBtn').click(function(event) {
    event.preventDefault();
    $('#loader').show();
    setTimeout(function() {
      window.location.href = 'signup';
    }, 500); // Simulating a delay of 2 seconds before redirecting
  });
});
// Function to validate the registration form


 function tr(){
  window.location.href="payment.html";
 }
  
  // function for login page show password
 function sp(){
  var passwordField = document.getElementById('loginPassword');
// Toggle the type attribute of the password field
  if (passwordField.type === 'password') {
    passwordField.type = 'text'; // Change type to text to show password
  } else {
    passwordField.type = 'password'; // Change type back to password to hide password
  }
 }
 function spsignup(){
  var spasswordField = document.getElementById('password');
// Toggle the type attribute of the password field
  if (spasswordField.type === 'password') {
   spasswordField.type = 'text'; // Change type to text to show password
  } else {
    spasswordField.type = 'password'; // Change type back to password to hide password
  }
 }

  // Call the function to populate the table

