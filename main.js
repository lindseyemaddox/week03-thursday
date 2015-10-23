   	var calculate = document.getElementById('calculateBtn');

   	var handleKeyPress = function add() {
    	var num_one = document.getElementById('num_one').value;
    	var num_two = document.getElementById('num_two').value;
		var sum = parseInt(num_one) + parseInt(num_two);
    	document.getElementById('answer').innerHTML = sum;
  	}

   calculate.addEventListener('click', handleKeyPress);