var coinFlip = Math.floor(Math.random() * 10);
var choice = window.prompt("Heads or Tails");
var result;

//  code for the first  1-7  points: 

 (coinFlip < 5) ? result = "Heads" : result = "Tails"; 
if(result == "Heads" && choice == "Heads") {
    window.document.write("The flip was heads and you chose heads...you win!");
}
else if(result == "Heads" && choice == "Tails") {
    window.document.write("The flip was heads but you chose tails...you lose!");
}
else if(result == "Tails" && choice == "Heads") {
    window.document.write("The flip was tails but you chose heads...you lose!");
}
else if(result == "Tails" && choice == "Tails") {
    window.document.write("The flip was tails and you chose tails...you win!");
}


//   Code for Boolean coinFlip result point 8:

/*(coinFlip < 5) ? result = true : result = false;

if(result && choice == "Heads") {
    window.document.write("The flip was heads and you chose heads...you win!");
}

else if(result && choice == "Tails") {
    window.document.write("The flip was heads but you chose tails...you lose!");
}

else if(!result && choice == "Heads") {
    window.document.write("The flip was tails but you chose heads...you lose!");
}

else if(!result && choice == "Tails") {
    window.document.write("The flip was tails and you chose tails...you win!");
}*/