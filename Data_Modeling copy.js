	// 1-create a data model to represent some of your classmates
	var arr = [{name:"das",age:12,sex:"male"},
	{name:"Besslan Bazadough",age:22, sex:"female"},{name:"dasbbb",age:52 , sex:"male"}]
	// 	-think of different attributes of your classmates? what do all of them have ?

	// 	-create a factory function.
	
	function create(Name , Age){
		return {name:Name,age:Age}

	}
	// 	-create an array to hold the classmates that you have created.
	function pushToArr(create){
arr.push(create)


	}
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
function displayFriend(mate){

for (var i = 0 ; i < arr.length ; i++){
if (mate === arr[i].name) {
	return "name : " + arr[i].name +"," + " age : " + arr[i].age
}
}
}
	
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	function NumOfMales() { 
count = 0 
for (var i = 0 ; i <arr.length ; i++ ) { 
if (arr[i].sex === "male"){
count++

}
}


return count
	}
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.
function searchFriend(mate,array){
var a =''
for (var i = 0; i < array.length; i++) {
	a = array[i].name.toLowerCase().indexOf(mate)
	if (array[i].name.toLowerCase() === mate.toLowerCase() ){
return array[i]
	}
	else if (mate.toLowerCase() === array[i].toLowerCase().substr(0,mate.length)){

return array[i]
	} 
	else if (mate.toLowerCase() === array[i].toLowerCase().substr(a,mate.length)){
		return array[i]
	}
	else return "friend not found"

	}

}
