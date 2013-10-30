var addFruit = function() {
	var fruit = ['apple','banana','kiwi','passionfruit','starfruit','plum'],
	fruiTML = document.getElementById('fruit-list').innerHTML, 
	max = fruit.length,
	i = 0;

	for(; i < max;) {
		fruiTML += "<li class='fruit-item'>" + fruit[i] + "</li>";
		i += 1;
	}
	document.getElementById('fruit-list').innerHTML = fruiTML;
}

addFruit();

var Person = function(name, birthday, hair_color, fav_fruit){
	this.name = name;
	this.birthday = birthday;
	this.hair_color = hair_color;
	this.fav_fruit = fav_fruit; 
}; 

var addPerson = function() {
	var array = [];

	name = prompt('whats your name?');
	birthday = prompt('whats your birthday?');
	hair_color = prompt('what your hair_color?');
	fav_fruit = prompt('whats ur fav_fruit?');

	array.push(new Person(name, birthday, hair_color, fav_fruit));
	array.push(new Person("sam", "March 12", "brown", "apple")); 
	array.push(new Person("Mary", "March 30", "brown", "Pear")); 
	array.push(new Person("David", "Dec 30", "Red", "banana")); 
	array.push(new Person("Tom", "April 30", "blac", "Berry"));
			
	var personTML = document.getElementById('person').innerHTML,
			max = array.length, 
			i = 0; 

		for(; i < max;) {
			personTML += "<li class='person'>" + " "+ array[i].name + " " + array[i].birthday + " "+ array[i].hair_color + " " + array[i].fav_fruit + "</li>";
			i += 1;
		}
		document.getElementById('person').innerHTML = personTML;
	}

addPerson();








// var Math = {
// 	Simple: {
// 		add: function(a,b) {
// 			return a + b;
// 		},

// 		subtract: function(a,b) {
// 			return a - b; 
// 		}
// 	},
// 	Trig: {

// 	},
// 	Calc: {

// 	}
// } 

// Math.Simple.add = function(a,b) {

// }

// ///////////////////////////////////////

// var Triangle = {

// 	isValid: function(a,b,c) {
// 		return a + b > c && b + c > a && c + a > b;
// 	},

// 	isEquilateral: function(a,b,c) {
// 		return a === b && a === c
// 	}
// }

// ////////////////

