var rules = [{
    "name": "paper",
    "loses_to": "scissor"
  },
  {
    "name": "scissor",
    "loses_to": "rock"
  },
  {
    "name": "rock",
    "loses_to": "paper"
  }
];

var i = 0
var Player1_stats = 0
var Player2_stats = 0
var draws = 0
var limit = 200;
//Change the value of the limit to how many times you want
//this to run

while (i < limit) {

  var random1 = Math.floor((Math.random() * rules.length) + 0);
  var random2 = Math.floor((Math.random() * rules.length) + 0);

  console.log("Player 1: " + rules[random1].name);
  console.log("Player 2: " + rules[random2].name);

  if (rules[random1].name == rules[random2].loses_to) {
    console.log("Player 1 wins");
    Player1_stats++;
  } else if (random1 == random2) {
    console.log("Draw");
    draws++;
  } else {
    console.log("Player 2 wins");
    Player2_stats++
  }

  i++;

};

console.log("Player1 =" + Player1_stats);
console.log("Player2 =" + Player2_stats);
console.log("draws =" + draws);
