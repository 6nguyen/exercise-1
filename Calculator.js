
		function calculate(){
			var number1 = document.getElementById("number1").value;
			var number2 = document.getElementById("number2").value;
			var operatorInput = document.getElementById("operator");
			var operator = operatorInput.value;	
			var answer;
			number1 = +number1;
			number2 = +number2;
			if (operator === "*") {
				answer = multiply(number1, number2);
			}
			else if (operator === "-") {
				answer= subtract(number1, number2);
			}
			else if (operator === "/"){
				answer = divide(number1, number2);
			}
			else {
				answer = add(number1, number2); 
			}
			//var value = operator(number1, number2);
			console.log(answer);
			document.getElementById("answer").textContent = answer;
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
