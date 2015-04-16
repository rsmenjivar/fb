$(document).ready(function(){

	var number = +prompt("Enter A Number");

 	if ( number % 1 != 0) {
 		alert("Only Whole Numbers Allowed")
 	}

 	else {
	for (var i = 1; i <= number; i++) {

		if ( ((i % 3) === 0) && (( i % 5 ) === 0) ) {
  			$("fizzbuzz").append("fizzbuzz");
		}
		else if ( (i % 3) === 0) {
  			$("fizzbuzz").append("buzz");
		}
		else if ( (i % 5) === 0 ) {
  			$("fizzbuzz").append("fizz");
		}
		else {
			$("fizzbuzz").append(i);
		}

		$('fizzbuzz').append('<br />');
	}
	}

});