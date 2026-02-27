let number = [10, 20 ,30 ,40 ,50];
let number1 = [60, 70 ,80 ,90 ,100];

let name ="sjbfjsbfjdbfdbvdnbv"
// console.log(number);
console.log(number[4]);   // index er value ta dekha 
console.log(number.indexOf(50));   // value tar index ber kora
console.log(number.indexOf(60));   // value ta na thakle  tar index ber kora   tahole tar index -1
console.log(number.indexOf(70));   // value ta na thakle  tar index ber kora   tahole tar index -1

console.log(Array.isArray(number));  // number-eta ki array ki array na ??/
console.log(Array.isArray(name)); // name-eta ki array ki array na ??/


console.log(number.includes(60)); // value check korlam value ta array list e ache ki nai

console.log(number.concat(number1));
console.log(number1.concat(number)); // 2ta array marge or jog korte parii .concat()


let number3=[100, 200 , 300 ,400]
console.log(number3)
 number3[3]=500;
console.log(number3);  // index er value update kivbe korte hoi 


number3.push(60);
console.log(number3); // last theke add korlam

number3.pop();
console.log(number3); // last theke delete korlam

number3.unshift(70);
console.log(number3);


number3.shift();
console.log(number3);



