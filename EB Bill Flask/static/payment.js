$(document).ready(function() {
    // Fetch user data and populate welcome message
    var userData = JSON.parse(localStorage.getItem('formData'));
    document.getElementById("vbilluname").innerHTML = userData.name;
    document.getElementById("cnum").innerHTML = userData.consumerNumber;
    document.getElementById("bnum").innerHTML = userData.billNumber;
  
    // Sample bill data (replace with actual bill data)
    var billData = {
      billAmount: 1500,
      totalPayableAmount: 1510, // Including PG charge
      pgCharge: 10
    };
  
    // Populate payment details
    $('#billAmount').val(billData.billAmount);
    $('#totalPayableAmount').val(billData.totalPayableAmount);
    $('#pgCharge').val(billData.pgCharge);
    // Proceed to payment button click event
    $('.pay-now').click(function() {
      // Redirect to card details page
      window.location.href = 'transaction.html';
    });
  });
  