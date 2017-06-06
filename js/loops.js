console.log("does loops work?")
var cities = ['new york', 'washington dc', 'compton', 'seattle', 'LA'];
var ul = document.createElement('ul');


// for(var i = 0; i < cities.length; i++){
// 	if (cities[i] !== 'seattle') {
// 		console.log(cities[i]);
// 	}
// }

for(var i = 0; i < cities.length; i++){
		var li = document.createElement('li')
		li.innerHTML = cities[i];
		ul.appendChild(li);

}
// console.log(ul);
document.body.appendChild(ul);