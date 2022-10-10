var coinFlip;

for(var l=0;l<10;l++) {
    coinFlip = Math.round(Math.random());
    if(coinFlip === 0) {
        window.document.write("Heads" + "<br>");
    }
    else if(coinFlip === 1) {
        window.document.write("Tails" + "<br>");
    }
}