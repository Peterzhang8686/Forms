    // JavaScript code for form validation
	  // Prevent form from submitting
    // Retrieve the input field value
    const inputField = document.getElementById('inputField');
    // Regular expression pattern for alphanumeric input
    document.getElementById('myForm').addEventListener('submit', function(event) {
      // Check if the input value matches the pattern
      if (isValidAlphanumeric(inputField.value)) {        
        // Valid input: display confirmation and submit the form
        alert('Form submitted successfully!');
      } else {
        // Invalid input: display error message
        alert('Input must be alphanumeric!');
        // Prevent the form from submitting
        event.preventDefault();
      }
    });
    // Validate the input value using a regular expression for alphanumeric input
    function isValidAlphanumeric(input) {
      const alphanumericRegex = /^[a-zA-Z0-9]+$/;
      return alphanumericRegex.test(input);
    }