var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];

function dwarfRollCall(dwarves) {
  var dwarfString = "";
  for (let i = 0; i < dwarves.length; i++) {
    dwarfString += (i+1).toString() + ". " + dwarves[i] + " ";
     }
     return dwarfString;
 
}

function summonCaptainPlanet(planeteerCalls){
  var planetCalls = [];
  for(let i = 0; i<planeteerCalls.length; i++) {
    planetCalls.push(planeteerCalls[i].toUpperCase + '!');
  }
  return planetCalls;
}

function longPlaneteerCalls(words) {
  for(let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    } else {
      return false; 
    }
    }
  }


function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"];
  for (var i = 0; i<foods.length; i++) {
  for (var j = 0; j<cheese.length; j++){
    if (foods[i] === cheese[j]){
      return foods[i];
    }
    }
  }
 return "no cheese!";
 }

