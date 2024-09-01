function solution(number) {
    return number.split('').map(Number).reduce((a,b) => a+b)%9;
}

console.log("123");
console.log("78720646226947352489");
