// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
	
	var classMate1 = {fullname:"asddas" ,age:12,favSport:"football",nat:"dasdas"}
	var classMate2 = {fullname:"bbbbbb" ,age:201,favSport:"football",nat:"asd"}
	var classMate3 = {fullname:"cccccc" ,age:103,favSport:"football",nat:"dasdas"}
	var classMate4 = {fullname:"asssssss" ,age:15,favSport:"football",nat:"jkljk"}
	var classMate5 = {fullname:"ammmmmm" ,age:17,favSport:"football",nat:"nbvnbv"}
var classMates=[classMate1,classMate2,classMate3,classMate4,classMate5]
// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function oldest(arr){
	var obj=""
	var oldest=arr[0].age
for (var i = 0 ; i < arr.length;i++){
if (arr[i].age>oldest){
	oldest = arr[i].age
obj = arr[i]
}else {oldest = oldest }

}
return obj

}

// 3-write a function that takes an object as argument and returns how many keys does that object contain.
function counter(obj){
var count = 0 
for (key in obj){
	count++
}
return count

}

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
		['hi','hello','welcome','hy'] // ==> ["hi","hy"]
		
function sameLength(arr){
var ar =[]
for (var i = 0 ; i < arr.length ; i++){
for ( var b = i +1;  b <arr.length ; b++){
if (arr[i].length === arr[b].length){
	ar.push(arr[i])
	ar.push(arr[b])
}

}
}
return ar

}