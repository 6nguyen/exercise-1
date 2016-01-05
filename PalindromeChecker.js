function palindrome(str) {
	function isAlpha(char) {
		char = char.toLowerCase();
		var alphabet = "abcdefghijklmnopqrstuvwxyz";
		for (var i = 0; i < alphabet.length; i++) {
			if (char === alphabet[i]) {
				return true;
			}
			else {
				return false;
			}
		}
	}
	
	var revString = [];
	var ogString = [];
	for (var o = 0; o < str.length; o++ ) {
		if (isAlpha(str[o])) {
			revString = revString.unshift(str[o]);
			ogString = ogString.push(str[o]);
		}
	}
	revString = revString.join("");
	ogString = ogString.join("");
	
	if (revString === ogString) {
		console.log(revString);
		console.log(ogString);
		return true;
	}
	else {
		console.log(revString);
		console.log(ogString);
		return false;
	}	
}


palindrome("never odd or even.");