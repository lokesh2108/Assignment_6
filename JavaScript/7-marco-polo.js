for(var l=1;l<=100;l++) {
    if(l%3 == 0 && l%5 == 0) {
        window.document.write('"Marco! Polo!"' + "<br>");
    }
    else if(l%3 == 0) {
        window.document.write('"Marco!"' + "<br>");
    }
    else if(l%5 == 0) {
        window.document.write('"Polo!"' + "<br>");
    }
    
}

