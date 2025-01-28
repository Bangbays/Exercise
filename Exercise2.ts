// 1
const number1 = 10;

if (number1 % 2 === 0) {
    console.log("Itu angka genap");
} else  {
    console.log("Itu angka ganjil");
}

console.log(number1 % 2 == 0 ? "Itu angka genap" : "Itu angka ganjil")

// 2
const number2 = 7;
let isPrime = number2 > 1 ? true : false;

for (let i = 2; i < number2; i++) {
    if (number2 % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime == true) {
    console.log(`${number2} bilangan prima`);
} else {
    console.log(`${number2} bukan bilangan prima`);
}

console.log(isPrime ? "bilangan prima" : "bukan bilangan prima");

// 3
const n3 = 5;
let sum = 0;

for (let i = 1; i <= n3; i++) {
    console.log(i);
    console.log(sum);
    sum += i;
}

console.log(sum);

// 4
const n4 = 6;
let factorial = 1;

if (n4 <= 0) {
    console.log("tidak menemukan angka negatif");
} else {
    for (let num = 2 ; num <= n4; num ++){
        factorial = factorial * num;
    }
}

console.log(`${n4}! = ${factorial}`);

// 5
const n5 = 15;
let nprev = 0;
let ncurr = 1;
let nnext;

for (let i = 0; i <= n5; i++){
    nnext = ncurr + nprev
    ncurr = nprev
    nprev = nnext
}

console.log(ncurr)