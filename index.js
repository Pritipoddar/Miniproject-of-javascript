//console.log("hello world!")
//variable and data type

// const number=5;
// number=10;
// console.log(number)

// var name = 'priti';
// name = 'gungun';
// console.log(name)

// let num = 10;
// num = 20;
// console.log(num)

// var name; //variable dec
// name = 'sundar'; //assign
// console.log(name)

// var num1 = 10.5;
// var num2 = 20;
// var num3 = 15;
// var add = num1+num2+num3
// console.log(add)


// let p1 = 'priti';
// let p2 = 10;
// let p3 = 15;
// let add1 = (p1+p2+p3)
// console.log(add1)

// let p4 = 20;
// let p5 = 'priti';
// let p6 = 15;
// let add2 = (p4+p5+p6)
// console.log(add2)

// let p7 = 20;
// let p8 = 10;
// let p9 = 'priti';
// let add3 = (p7+p8+p9)
// console.log(add3)

//object in javascript

// const student = {
//     name: 'priti',
//     roll: 34,
//     branch: 'ECE',
// }
// console.log(student)
      //ARITHMATIC OPERATION//
// let num1 = 10, num2 = 20;
// add = num1+num2;
// sub = num1-num2;
// mul = num1*num2;
// divi = num1/num2;
// mod = num1%num1;
// console.log(add);
// console.log(sub);
// console.log(mul);
// console.log(divi);
// console.log(mod);


  // post increment
// let num1 = 10;
// console.log(num1++)
// console.log(num1)

//   //pre increment
// let num1 = 10;
// console.log(++num1)
// console.log(num1)  


  //post/pre decrement
// let num1 = 10;
// console.log(num1--)
// console.log(num1)
// console.log(--num1)
// console.log(num1)

      // ASSIGNMENT OPERATOR//

// let x = 4, y = 2;

// console.log(x += y);
// console.log(x -= y);
// console.log(x *= y);
// console.log(x /= y);
// console.log(x %= y);
// console.log(x ** y);
      //COMPARISON OPERATOR//

// let a = 5, b = 6;

// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);
// console.log(a!==b);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);

      //LOGICAL OPERATOR//
//  let p = 10, s = 20;
//  console.log(p >5 && s>15);
//  console.log(p <5 && s<15);
//  console.log(p >5 || s>15);
//  console.log(p <5 || s<15);
//  console.log(!s>15);
//  console.log(!s<15);

      //CONDITIONAL STATEMENT//
  //1.if statement
// let age = 28;
// if(age>=18){
//     console.log("mauj kro bete!");
// }
// else{
//     console.log("padhai kro babu! padhne ka time hai ye.");
// }

// let time = 24;
// if(time>00 && time <=12){
//     console.log("good morning");
// }
// else if (time > 12 && time<16){
//     console.log("good afternoon");
// }
// else if(time>16 && time<20){
//     console.log("good evening");
// }
//   else{
//     console.log("good night");
// }

        //TERNARY OPERATOR//
// let age =15;        
// let a = age > 18 ? "aap daru pi sakte hai":"aap nhi pi skte hai";
// console.log(a);
      
  //FOR In LOOP//
// const student = {
//       fname:"Priti",
//       lname:"poddar",
//       age: 18,
// }  
// let x;
// for (let x in student){
//       console.log(x, ":" , student[x]);
// }

     //Function//
// function myFunction(){
//       console.log("hello world");
// }

// myFunction();
     
              //ex-2//
// function addTwoNumber(x,y){
//       console.log(x+y);
// }  
// addTwoNumber(4,5);  



// function fToc(f){
//       console.log("The answer is",((f-32)*5)/9);
// }
// fToc(98.6);

     //ex-4//

// let x = prompt("enter first num");
// let y = prompt("enter second num");

// function mulTwoNumber(x,y){
//       console.log(number(x) * number(y));
// }
// mulTwoNumber(x,y);

   //string in javascript//

// let city = "patna";
// console.log(city);  
// let city1 = 'gaya';
// console.log(city1);

// let quote = `"work hard"`;
// console.log(quote)

// let city2 = `saharsa`;
// console.log(city2)



// let city = `saharsa`;
// console.log(city.length);
// console.log(city[0]);
// console.log(city[city.length-1]);
// console.log(city.toUpperCase());
// console.log(city.toLowerCase());
// console.log(city.slice(2));

// let city1 = `patna`;
// let city2 = `saharsa`;
// let city3 = city1.concat(city2);
// console.log(city3);

      //array in js//

// let city = [`patna`, `saharsa`,`araria`];
// console.log(city);
// console.log(city[0]);
// console.log(city.length);
// city[0] = `delhi`;
// console.log(city);
// console.log(typeof(city))
// let city1 = city.toString();
// console.log(city1);
// console.log(typeof(city1));
// console.log(city.join("-"))


// let number = [1,3,5,7,9];
// let number1 = number.pop();
// let number2 = number.push(11);
// console.log(number1)
// console.log(number)

// let a1 = [1,3,7,9];
// let a2 = [2,4,6,8];
// let a3 = [1,2,3,4];
// let a = a1.concat(a2,a3);
// console.log(a);
// console.log(a.sort()) 
// console.log(number.slice(2))


     //Date in javascript//
// const date = new Date();
// // console.log(date);
// // console.log(date.getDate());
// // console.log(date.getDay());
// // console.log(date.getHours());
// // console.log(date.getMinutes());
// // console.log(date.getSeconds());
// // console.log(date.getMilliseconds());
// document.getElementById("demo").innerHTML = date;

         //break and continue statement//
// let a = 1;
// for (var i = 0; i< 10; i++){
//       if(i == 5){
//             break;
//       }
//       console.log(a + i);
// }         
// let a = 1;
// for (var i = 0; i< 10; i++){
//       if(i == 5){
//             continue;
//       }
//       console.log(a + i);
// }      

