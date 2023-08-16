// ES 5

//  apply() / 1st use
// function sum(a, b, c){
//     console.log(a+b+c);
// }
// sum(1,2,3) 
// var arrVal = [5,2,3];
// sum.apply(null, arrVal);



// Concat() / 2nd use      = it is use to merge the value of 2nd array inside the 1st array

// let arr1 = [2,3,4];
// let arr2 = [5,6,7];

// arr1 = arr1.concat(arr2);
// console.log(arr1);


// Copy() / 3rd use
// let arrc1 = [1,2,3];
// let arrc2 = arrc1;     //copied 1st array in 2nd array.
// arrc2.push(4,5);       //to push something in the 2nd array.
// console.log(arrc2);
// console.log(arrc1);      //after consoling both, 4 and 5 are copied in both the arrays which we do not want. that's why we use spread operators




// ES 6

// 1st use
// function sum2(d,e,f){
//     console.log(d+e+f);
// }
// var arrVal2 = [1,2,3];
// console.log(...arrVal2);       //from this we can get the value of array eg. output :- 1 2 3

// sum (...arrVal2);       // ...arrVal2  = array name we have to pass.


// 2nd use / concatination
// let arr3 = [2,3,4];
// let arr4 = [5,6,7];
// let arr5 = [8,9,10];

// arr3 = [...arr3, ...arr4, ...arr5];    //inside the arr3, remaining arrays will be merged.
// console.log(arr3);


//  3rd use / copy

let arrc3 = [1,2,3];
let arrc5 = [6,7,8];
let arrc4 = [...arrc3, 4,5, ...arrc5, 9,10];      //here we can push inside the array only wherever we wanna push.
console.log(arrc3);
console.log(arrc4);