// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
	var mates = [
	{
		
		fullName : "khadija almoustafa",
		age : 19,
	    sports : "football",
		nationality : "syrian" }
	];
	

	

// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function bb(mates){
	var vv =  [];
	for (var key in mates){
		bb.push(mates([key]));
	}
	return vv;
}

// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2



	 function ss(mates){
		var c=1;
		var l=[];
		 for (var key in mates){
           c=c*(mates[key].length)
		 }
		 return l;
	 }

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
		['hi','hello','welcome','hy'] // ==> ["hi","hy"]
		
var arr = ["sara","soso","mohammed","lala","average","sum"] ;
		function kk(arr){
			var a = arr.length;
			var i=0;
            while ( i < a) {
				i=i+1;
				a[i]=a
			}
	
            return a;
		}

