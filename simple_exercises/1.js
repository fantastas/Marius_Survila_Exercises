function reverseString (str) {
	var splitStr = str.split("")
	var reverseArray = splitStr.reverse();
	var joinArray = reverseArray.join(""); 
	return joinArray;
}

console.log(reverseString("example"))


