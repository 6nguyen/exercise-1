var number1 = document.getElementById("number1").value;
			var num2 = document.getElementById("number2");
			var number2 = num2.value;
			var operatorInput = document.getElementById("operator");
			var operator = operatorInput.value;	
			
		
				
        
		function calculate(number1, number2, operator){
			var answer;
			var num1 = Number(number1);
			var num2 = Number(number2);
			
			if (operator == "*") {
				answer = multiply(number1, number2);
			}
			else if (operator == "-") {
				answer= subtract(nmber1, number2);
			}
			else if (operator == "/"){
				answer = divide(nmber1, number2);
			}
			else {
				answer = add(number1, number2); 
			}
			//var value = operator(number1, number2);
			console.log(answer);
			return answer;
		}
		function multiply(num1, num2){
			var value = num1 * num2;
			return value;
		}
		function subtract(num1, num2){
			var value = num1 - num2;
			return value;
		}
		function divide(num1, num2){
			var value = num1 / num2;
			return value;
		}
		function add(num1, num2){
			var value = num1 + num2;
			return value;
		}
