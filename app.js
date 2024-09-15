// Convert a String to a Number
const price = "200";

const priceAsInt = parseInt(price);
const priceAsNumber = Number(price);
const priceAsPlus = +price;

console.log(priceAsInt);  
console.log(priceAsNumber);  
console.log(priceAsPlus);  

// Convert a Number to a String 
const distance = 150;

const distanceStr1 = distance.toString();

const distanceStr2 = String(distance);

console.log(distanceStr1);
console.log(distanceStr2);

// Convert a String to Decimal Number
const weight = "72.5";    
const weightInDecimal = parseFloat(weight);    

console.log(weightInDecimal);
