function getFormvalue() {
    //Write your code here
	  // event.preventDefault();
    
    // Get the values directly from the form using document.querySelector
    var firstName = document.querySelector('input[name="fname"]').value;
    var lastName = document.querySelector('input[name="lname"]').value;
    
    // Display the full name in an alert
    alert(firstName + " " + lastName);
	
}

