	var num_one = document.getElementById('num_one').value;
	var num_two = document.getElementById('num_two').value;

   	var add = document.getElementById('additionBtn');
   	var subtract = document.getElementById('subtractionBtn');
   	var multiply = document.getElementById('multiplicationBtn');
   	var divide = document.getElementById('divisionBtn');

   	var addition = function calculateSum() {
		var sum = parseInt(num_one) + parseInt(num_two);
    	document.getElementById('answer').innerHTML = sum;
  	}

   	var subtraction = function calculateProduct() {
		var product = parseInt(num_one) - parseInt(num_two);
    	document.getElementById('answer').innerHTML = product;
  	}

   	var multiplication = function calculateFactor() {
		var factor = parseInt(num_one) * parseInt(num_two);
    	document.getElementById('answer').innerHTML = factor;
  	}

   	var division = function calculateResult() {
		var result = parseInt(num_one) / parseInt(num_two);
    	document.getElementById('answer').innerHTML = result;
  	}

   	add.addEventListener('click', addition);
   	subtract.addEventListener('click', subtraction);
   	multiply.addEventListener('click', multiplication);
   	divide.addEventListener('click', division);
