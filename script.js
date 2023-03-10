// complete the given function
let string;
function palindrome(str){
	string = [str.split("")];
	for (let index = 0; index < string.length; index++) {
		if(string[index] == str[string.length - index]) {
			return true;
		}
		else {
			return false;
		}
	}
}
module.exports = palindrome
