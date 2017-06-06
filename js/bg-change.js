
//querySelector lets you select a single element
//best used with id
var bgColor = document.querySelector('#bg-color');
// console.log(bgColor);
// function getRandomColor() {
//     var chars = '0123456789ABCDEF'.split('');
//     var hex = '#';
//     for (var i = 0; i < 6; i++) {
//         hex += chars[Math.floor(Math.random() * 16)];
//     }
//     return hex;
//  }

function numInRange(min, max){

	return Math.floor(Math.random() * (max -min)) + min;
}
function changeColor (){
	// console.log('click');
	bgColor.style.backgroundColor = '#' + numInRange(100000, 999999);
	// console.log(getRandomColor());
}
bgColor.addEventListener('click', changeColor);
