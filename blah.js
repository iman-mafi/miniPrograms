function addPassenger (name, list) {
	if (list.length ==0) {
		list.push(name);

	}else{

		for (var i = 0; i < list.length; i++) {
			if(list[i] == undefined) {

				list[i] = name;
				return list;

			}else if (i== list.length -1) {
				list.push(name);
				return list;
			}
		}
		
	}
	
}  




function deletePassenger (name, list){
	if (list.length ==0) {
		console.log("List is empty!");
	} else{
		for (var i = 0; i < list.length; i++) {
			 if (list[i] ==name) {
			 	list[i] = undefined;
			 	return list;

			 } else if (i == list.length -1) {
			 	console.log("Passenger not found!");
			}
		}
	}
	return list;
}


// anon function expression below

var diff = function (a,b){
	return a*a - b*b;
};

// anon function expression above

//------------------------------------------------------------------------------------------

var greeting;







var greeting = function(){
	alert("Thanks for visiting the badlands")

}

//---------------------------------------------------------------------------------------------

var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function() {
  if (fear < 200) {
    return confirm("Fear Level: LOW\nStill wanna ride?");    
  } else if (fear >= 200 && fear <= 300) {
    return confirm("Fear Level: MEDIUM\nThink you'll make it?");
  }
};

function confirmRide(confirmToGo){
  return confirmToGo();
}

var startRide = confirmRide(fearMessage);


//---------------------------------------------------------------------------------------------

var numbers = [12,4,3,9,8,6,10,1];

var results = numbers.map(function(arrayCell){return arrayCell *2;});

console.log(results);

//---------------------------------------------------------------------------------------------

var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];

var modifiedNames = passengers.map(function(arrayCell){return arrayCell[0] + " " + arrayCell[1];});

console.log(modifiedNames);

//---------------------------------------------------------------------------------------------

var modifiedNames = [ "Thomas Meeks",
                      "Gregg Pollack",
                      "Christine Wong",
                      "Dan McGaw" ];

modifiedNames.map(function(name) {
  alert("Yo, " + name + "!"); 
});

//------------------------------------------------------------------------------------------------










































