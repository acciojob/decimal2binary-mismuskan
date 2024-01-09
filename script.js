function decimalToBinary(num) {
  //Write you code here
  let bin="";
	while (num>0) {
	let rem=num%2
		bin=rem+bin;
		 num = Math.floor(num / 2);
	}
	console.log(bin);
}

window.decimalToBinary = decimalToBinary;
