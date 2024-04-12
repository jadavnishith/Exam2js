// Month Checker

let month = +prompt("Enter Number Between 1-12:");

switch (month){
    case 1:console.log(month,"January");break;
    case 2:console.log(month,"February");break;
    case 3:console.log(month,"March");break;
    case 4:console.log(month,"April");break;
    case 5:console.log(month,"May");break;
    case 6:console.log(month,"June");break;
    case 7:console.log(month,"July");break;
    case 8:console.log(month,"August");break;
    case 9:console.log(month,"Septmber");break;
    case 10:console.log(month,"Octomber");break;
    case 11:console.log(month,"November");break;
    case 12:console.log(month,"December");break;
    default : console.log("Invalid Number ❌");
}

// Tax Calculator

let income = +prompt("Enter Your Income :");
let tax = 0
if(income <= 10000){
    tax = income * 5 / 100;
    console.log("Your Tax Amount is:",tax);
}else if(income <= 20000){
    tax = income * 10 / 100;
    console.log("Your Tax Amount is:",tax);
}else if(income <= 30000){
    tax = income * 15 / 100;
    console.log("Your Tax Amount is:",tax);
}else if(income > 30000){
    tax = income * 20 / 100;
    console.log("Your Tax Amount is:",tax);
}

// Product Discount

let amount = +prompt("Enter Amount :");
let discount;
let finalPrice;

if(amount <= 100){
    discount = amount * 5 / 100;
    console.log("Discount is :",discount,"%");
    finalPrice = amount - discount;
    console.log("Final Price is :",finalPrice);
}else if(amount <= 500){
    discount = amount * 10 / 100;
    console.log("Discount is :",discount,"%");
    finalPrice = amount - discount;
    console.log("Final Price is :",finalPrice);
}else{
    discount = amount * 15 / 100;
    console.log("Discount is :",discount,"%");
    finalPrice = amount - discount;
    console.log("Final Price is :",finalPrice);
}

// BMI Calculator

let weight = +prompt("Enter Your Weight");
let height = +prompt("Enter Your Height in Meter");

let BMI = weight / (height * height);
console.log(BMI);

if(BMI < 18.5){
    console.log("Under Weight");
}else if (BMI > 18.5 && BMI <= 24.9){
    console.log("Normal");
}else if(BMI >= 25 && BMI <= 29.9){
    console.log("Over Weight");
}else{
    console.log("Obeses");
}