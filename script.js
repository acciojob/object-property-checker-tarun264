const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
	for(let existingKey in sampleObject){
	  if(existingKey===key){
		  return true;
	  }
	  else return false;
}
}
// Do not change the code belo
const key = prompt("Enter Key.");
alert(hasKey(key));
