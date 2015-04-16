$(document).ready(function(){

	var number = +prompt("Enter A Number");
	var $fb = $("#fb");

 	if ( number % 1 != 0) {
 		alert("Only Whole Numbers Allowed")
 	}

 	else {
		for (var i = 1; i <= number; i++) {

			if ( ((i % 3) === 0) && (( i % 5 ) === 0) ) {
	  			$fb.append("fizzbuzz");
			}
			else if ( (i % 3) === 0) {
	  			$fb.append("buzz");
			}
			else if ( (i % 5) === 0 ) {
	  			$fb.append("fizz");
			}
			else {
				$fb.append(i);
			}

			$fb.append('<br />');
		}
	}

});