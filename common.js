"use strict";

console.log(typeof null);
// 1. "object"

let increase = 45;
while ( increase < 67) {
  console.log(increase);
  increase ++;
}
// 2.

let increaSe = 45;
while ( increaSe < 670 ) {
  if ( increaSe % 10 === 0){
    console.log(increaSe);
  }
 increaSe ++;
  }
// 3. increaSe = increaSe + 10; 

let n = +prompt ( 'Enter numbers from 0 to 9');
switch(n) {
case 0:  
 alert ('zero');
break;
case 1:  
 alert ('one');
break;
case 2:  
 alert ('two');
break;
case 3:  
 alert ('three');
break;
case 4:  
 alert ('four');
break;
case 5:  
 alert ('five');
break;
case 6:  
 alert ('six');
break;
case 7:  
 alert ('seven');
break;
case 8:  
 alert ('eight');
break;
case 9:  
 alert ('nine');
break;
default:
 alert ('error');
}
// 4.

function hellow() {
  alert( 'Hello Java Script!' );
}
hellow();
// 5.

let hellow2 =  (name, surname) => name + surname;
 

console.log (hellow2('Ivan', 'Petrov'));
hellow2('Ivan', 'Petrov');
// 6. why errors?


function re(str, number=2) {
  let updatedStr = '';
  for(let i = 0; i < number; i++) {
      updatedStr += str + '+' + 'yo!'; // updatedStr = updatedSTr + str
  }
  return updatedStr;
}
console.log(re("hi", 3));
// 7.


for (let countdown = 5; countdown >=1; countdown--){
  console.log(countdown);
}

let countdown1 = 5;
while ( countdown1 >=1) {
  console.log(countdown1);
  countdown1--;
}

let countdown2 = 5;
do {
  console.log(countdown2);
  countdown2--;
} while (countdown2 >=1);

// 8.


function checkType (value) {
  if (typeof value === 'number'){
    console.log ("This value is number");
  }else   if (typeof value === 'string'){
    console.log ("This value is string");
  }else   if (typeof value === 'boolean'){
  console.log ("This value is boolean");
 }
}
checkType(true);
// 9.


let hour = 60;
let second = 60;

if (hour ===60 && second === 50){
console.log("Time is allright!");
}else {
  console.log("Something wrong");
}

let hour1 = 60;
let second1 = 60;

if (hour1 ===60 || second1 === 50){
console.log("Time is allright!");
}else {
  console.log("Something wrong");
}

let firstName = null;
let lastName = null;
let nickName = "Super Hero";

console.log(firstName ?? lastName ?? nickName ?? "Super Hero"); 
// 10.

let num = 1;
let nuM = '1';

if ( num === nuM ){
  console.log(true);
} else {
  console.log(false);
}
// 11.


/*const str = "Helo";
const str2 = "World!"*/

function sum(str, str2){
  let result = '';
if ( typeof str === 'string' && typeof str2 === 'string'){
  result = str + str2;
} 
return result;
}
console.log (sum());
// 12.
let object = {
  age: 28,
  hight: 1.70,
  getAge() { return this.age; },
  //   getAge: function() {return this.age;}
  getHight() { return this.hight; },
  'Hi Dude!': 45,
  setAge(age) { 
    if ( typeof age === 'number'){
      this.age = age;
    }
  }
};
console.log(object.getAge());
console.log(object.getHight());
console.log(object['Hi Dude!']);
object.age = 50;
console.log(object.getAge());
object.setAge(8);
console.log(object.getAge());