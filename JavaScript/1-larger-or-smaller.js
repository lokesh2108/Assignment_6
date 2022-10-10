var number_1 = parseInt(window.prompt("Enter the first number"));
var number_2 = parseInt(window.prompt("Enter the second number"));

if(number_1 > number_2) {
    window.document.write("First number  " + number_1+ " is larger than Second number " + number_2);
}

else if(number_1 < number_2) {
    window.document.write("Second number "+number_2+ " is larger than First number " + number_1);
}

else {
    window.document.write("Both the numbers are equal");
}