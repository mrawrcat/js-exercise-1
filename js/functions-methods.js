// console.log("document linked?")

function add_it(numA, numB){
	// var numA = 2;
	// var numB = 3;
	var total = numA + numB;
	console.log(total);

}

function multiply(numA, numB){
	var total = numA * numB;
	return total; //stops the function and returns the total
	console.log("this is never going to happen");
}
add_it(8, 22);
//an object
var dan ={
	arms:2 ,
	big_nose: true ,
	hairColor: 'brown' ,
	//a method is a function in a object
	slogan: function(what){
		console.log(what + 'is awesome');

	}
}

dan.slogan('javascript');
dan.hairColor = 'grey';
console.log("dan has " + dan.hairColor + " hair");
console.log(multiply(12,55));