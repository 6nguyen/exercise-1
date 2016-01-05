function palindrome(str) {
	function isAlpha(char) {
		var alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
		for (var i = 0; i < alphabet.length; i++) {
			if (char === alphabet[i]) {
				return true;
			}
		}
	}
	str = str.toLowerCase();
	var revString = [];
	var ogString = [];
	for (var o = 0; o < str.length; o++ ) {
		if (isAlpha(str[o])) {
			revString.unshift(str[o]);
			ogString.push(str[o]);
		}
	}
	revString = revString.join("");
	ogString = ogString.join("");
	
	if (revString === ogString) {
		return true;
	}
	else {
		return false;
	}	
}


palindrome("My age is 0, 0 si ega ym.");