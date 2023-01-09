function lim(arr) {
	let flag = true;
let arr1 = [];
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] % 2 == 0) {
			flag = false;
		
		}else {
		flag = true;
		}
			arr1[i] = flag;
	}
return arr1;
}

let arr = [222, 332, 32875, 3275, 3257, 389254];
let arr1 = lim(arr);
console.log(arr , arr1);