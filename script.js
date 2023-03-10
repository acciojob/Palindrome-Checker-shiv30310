// complete the given function
let string;
function palindrome(str){
	string = str
	for (let index = 0; index < string.length /2; index++) {
		if(string[index] !== string[string.length - index -1]) {
			return false;
		}
		return true;
		}
	}

module.exports = palindrome
