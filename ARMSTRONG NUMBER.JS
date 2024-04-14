const number = prompt("Enter a positive integer");
const numberOfDigits = number.length;
let sum = 0;


let temp = parseInt(number);

while (temp > 0) {

    let remainder = temp % 10;

    sum = sum+(remainder ** numberOfDigits);

    
    temp = parseInt(temp / 10); 
}

if (sum === parseInt(number)) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}