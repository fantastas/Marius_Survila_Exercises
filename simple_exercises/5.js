function sum_Arr(arr){
	var sum = 0;
	for(i = 0; i < arr.length;i++){
		sum += arr[i];
	}
	return sum;
}

console.log(sum_Arr([1,2,3,4,5,6,7]));