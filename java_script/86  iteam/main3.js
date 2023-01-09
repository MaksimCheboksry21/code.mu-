function TwoElem(arr){
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] == arr[i + 1]) {
			return true;
		}
	}
	return false;
}
arr1 = [1,2,3,3,5];
arr2 = [[1,2,3,6,5,8,7,3,2]];
alert(TwoElem(arr1));
alert(TwoElem(arr2));
