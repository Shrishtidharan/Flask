document.getElementById('complaintForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Generate a random complaint ID
    var complaintId = generateComplaintId();
    
    // Get form data
    var complaintData = {
      complaintId: complaintId,
      complaintType: document.getElementById('complaintType').value,
      contactPerson: document.getElementById('contactPerson').value,
      landmark: document.getElementById('landmark').value,
      consumerNumber: document.getElementById('consumerNumber').value,
      problemDescription: document.getElementById('problemDescription').value,
      mobileNumber: document.getElementById('mobileNumber').value,
      address: document.getElementById('address').value
    };

    // Store form data in local storage
    localStorage.setItem('complaintData', JSON.stringify(complaintData));
    var cData = JSON.parse(localStorage.getItem('complaintData'));
    
    // Display success message with complaint details
    alert('Complaint Raised successfully!\n' + "Complaint ID - " + cData.complaintId + "\nConsumer Number - " + cData.consumerNumber + "\nContact Name - " + cData.contactPerson + "\nPhone Number - " + cData.mobileNumber);
    
    // Redirect to index.html after closing the alert
    window.location.href = 'viewbill.html';
});

// Function to generate a random complaint ID
function generateComplaintId() {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var length = 8;
  var result = '';
  for (var i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
