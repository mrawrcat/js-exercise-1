console.log("This Works");

//declares variables
var bleh = 25.369;
var myName = 'Daniel';
var myHobbies = ['sleeping', ' coding', ' stuff', ' other stuff' ];
//object variable
var thisObject = { 

	 objName: 'Apollo',
	 objAge: 5,
   objLikes: ['sleeping', ' coding', ' stuff', ' other stuff', 500000000000 ]
}


/* 
stuff stuff stuff stuff stuff stuff stuff stuff
stuff stuff stuff stuff stuff stuff stuff stuff
stuff stuff stuff stuff stuff stuff stuff stuff
stuff stuff stuff stuff stuff stuff stuff stuff
stuff stuff stuff stuff stuff stuff stuff stuff
stuff stuff stuff stuff stuff stuff stuff stuff
stuff stuff stuff stuff stuff stuff stuff stuff
*/






//outputs into console
console.log(myName);
console.log("my age is: " + bleh);
console.log("my hobbies are: " + myHobbies);
console.log(thisObject.objName);
console.log("seems to be " + thisObject.objAge +  " years old");
//arrays start counting from 0
console.log("and likes: " + thisObject.objLikes[5]);