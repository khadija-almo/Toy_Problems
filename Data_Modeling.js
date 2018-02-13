	// 1-create a data model to represent some of your classmates
	var a ={
		name : "shefaa", 
		age : 17,
	}
	var b = {
		name : "mohammed",
		age : 23,
	}
	var c = {
		name : "lara",
		age : 20,
	}

	// 	-think of different attributes of your classmates? what do all of them have ?

	// 	-create a factory function.
	function cc(name,age){
		var d = {
			name : name,
			age = age
		};
       return d; 
	}
	// 	-create an array to hold the classmates that you have created.
	var t =[
		{  a ={
		name : "shefaa", 
		age : 17}},
	
	  { b = {
		name : "mohammed",
		age : 23}},
	
	  {  c = {
		name : "lara",
		age : 20 }}
	
	];

	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.

	function displayFriend(friend){
		return friend.name + " " + friend.age;
	}
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	function addFriend (t,friend){
        t.push(friend);
	}
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.
