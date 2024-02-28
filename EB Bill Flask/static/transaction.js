$(document).ready(function() {
    $('#paymentForm').submit(function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Retrieve credit card details from the form
      var cardNo = $('#cardNo').val();
      var cardHolderName = $('#cardHolderName').val();
      var expiryDate = $('#expiryDate').val();
      var cvv = $('#cvv').val();
  
      // Perform validation here if needed
  
      // Prepare transaction details
      var transactionDetails = {
        cardNo: cardNo,
        cardHolderName: cardHolderName,
        expiryDate: expiryDate,
        cvv: cvv,
        // You can add more transaction details here if needed
      };
  
      // Display transaction details
      displayTransactionDetails(transactionDetails);
  
      // Generate and download the PDF
     
    });
  });
  
  function displayTransactionDetails(details) {
    var userData = JSON.parse(localStorage.getItem('formData'));
    // You can customize how to display the transaction details here
    var transactionHTML = '<h2 style="color:green"> Payment Successful </h2>';
    transactionHTML += '<p><strong>Credit Card Number:</strong> ' + details.cardNo + '</p>';
    transactionHTML += '<p><strong>Card Holder Name:</strong> ' + details.cardHolderName + '</p>';
    transactionHTML += '<p><strong>Expiry Date:</strong> ' + details.expiryDate + '</p>';
    transactionHTML += '<p><strong>CVV:</strong> ' + details.cvv + '</p>';
    transactionHTML += '<p><strong>Consumer Number:</strong> ' + userData.consumerNumber + '</p>';
    transactionHTML += '<p><strong>Consumer Number:</strong> ' + userData.name + '</p>';
    transactionHTML += '<p><strong>Consumer Number:</strong> ' + userData.billNumber + '</p>';
    
  
    // Append the transaction details to a container in the HTML
    $('#transactionDetails').html(transactionHTML);
  
    // Show the transaction details section
    $('#transactionDetailsSection').show();
  }


  
 