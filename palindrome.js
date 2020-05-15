function isPalindrome(str) {
	var reversed = "";
	for (var char of str) {
			reversed = char + reversed;
	};
	console.log(reversed);
	return reversed === str; //boolean expression
}
console.log(isPalindrome("mad"));

// reversed_0 = "" // Initial value
// reversed_1 = "m" + "" = "m" // Iteration 1
// reversed_2 = "a" + "m" = "am" // Iteration 2
// reversed_3 = "d" + "am" = "dam" // Iteration 3
// reversed_4 = "a" + "dam" = "adam" // Iteration 4
// reversed_5 = "m" + "adam" = "madam" // Iteration 5

// "madam" === "madam" // true