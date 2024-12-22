

// alert("Welcome to the mern stack journey");

// operators : used to perform operation on data like a+b a and b are the operands and + is the operator
// Arithematic operators(+,-,/,*)


// let a = 1;
// let b = 1;

// console.log("a =",a ,"& b =",b);
// console.log("a+b = ",a+b);
// console.log("a-b = ",a-b);
// console.log("a/b = ",a/b);
// console.log("a*b = ",a*b);

// below are the bitwise operations

// console.log("a&b = ",a&b);
// console.log("a|b = ",a|b);
// console.log("a^b = ",a^b);

// modulas : used for reminder %
// Exponentiation : used for power  **

// let number=prompt("Enter the number");





// console.log("a%b = ",a%b);
// console.log("a**b = ",a**b);


// Unary operators:
// increment  ++
// decrement  --
 

// post increment first print then add  a++

// console.log("a++ is :",a++);
// console.log("The value of a is :",a);

// pre increment add and print both ++a

// console.log("++a is :",++a);



// post decrement first print then subtract  a--

// console.log("a-- is :",a--);
// console.log("The value of a is :",a);

// pre decrement subtract and print both  --a

// console.log("--a is :",--a);


// Assignment operator is used to assign the value to the variables
// =
// +=
// -=
// /=
// *=
// **=

// console.log("+= :",a+=b);
// console.log("-= :",a-=b);
// console.log("/= :",a/=b);
// console.log("*= :",a*=b); 
// console.log("**= :",a**=b);
// console.log("%= :",a%=b);



// Comparison operator  == != === !== > < >= <= 

// console.log("3==3",a==b);
// console.log("3!=3",a!=b);
// console.log("7<=5 :",7<=5);




// let age=parseInt(prompt("enter the value for age")) ;

// if(age>=18&&age<=50)
// {
//     let gender=prompt("Enter the gender");
//     if(gender=='male'){
//         console.log("Eligible");
//     }
//     else if(gender=='female'){
//             console.log("Not eligible for licence go home");
//         }
//      else{
//         console.log("Not an valid gender");
//      }   
    
// }

// else if(age<18)
// {
//     console.log("not eligible at this age");
// }

// else{
//     console.log("Not a valid age");
// }




// let gender = prompt("Enter the gender ");
// if(gender=='female'){
//     console.log("get out");
// }

// else if(gender=='male'){
// let age =parseInt(prompt("Enter the value of age"));
// if(age>=18&&age<=50)
// {
//     console.log("valid for passport");
// }

// else if(age>=0 &&age<18)
// {
//     console.log("Not valid for passport");
// }

// else{
//     console.log("Sorry!😢 Age not supported");
// }


// }

// else{
//     console.log("Not a valid gender ☠️");
// }

// concate
// length
// comparison


// let ab = "shoukat";
// let cd = "khan";

// let mus = ab+cd; It called concate means add of two strings
// // console.log("string is :",ab+cd);
// console.log("string is",ab.length);  is is used for checking the numbers of characters in a string 
// console.log("checking conditon",ab!=cd); It called compare of string

// const shoukatab = {
//     name : "shoukat",
//     _reg :2121134002,
// };



// Logical opertors 
// And &&   T,T=T  and others are false
// Or ||    F,F=F  and others are true
// not !    T=F and F=T


// let abcd = 4;
// let efgh = 2;

// let cond_1 =abcd>efgh;  true
// let cond_2 =abcd!=efgh; true

// console.log("conditon is",cond_1&&!(cond_2));


// If else : when ever we need to perform different operation based on conditon if else is used
//  Syntax:
// if(conditon){
//     // Do something if true
// }
// else{
//     // Do something if false
// }


// let age = parseInt(prompt("Enter the value of age"));
// if(age>=18&&age<=60){
//     console.log("Eligible for CNIC");
// }

// else{
//      console.log("Not eligible for cnic");
// }

// let setpassword ="shoukat123";
// let enterloginpassword =prompt("Enter the login password");
// while(enterloginpassword!=setpassword)
// {
//     usernum=prompt("Your password is wrong try again");
// }
// console.log("Congratulation you are logged in succcesfully 👌");

// 25!=25 false
// 50!=25 true 


// let set_passswords ="shoukat1234";
// let Enterpassword=prompt("Enter the password");
// if(set_passswords==Enterpassword)
// {
//     console.log("Congratulations !! Login Succesfully");

// }

// else{
//     console.log("Please try agian");
// }



// let password = prompt("Enter the password");
// if(password>=1000&&password<=9999){
//     console.log("Its a 4 digit ");
// }

// else{
//     console.log("Its not a 4 digit password");
// }

// let number=25;
// let guessnumber =prompt("Guess the number");
// while(number!=guessnumber){
//     guessnumber=prompt("Wrong guess! guess again");
// }
// console.log("You guess it right");

// 25!=25
// 256!=25  

// let mode =prompt("Enter the mode");
// let color;
// if(mode=='dark'){
//     color="black";
//     console.log("color is ",color);
// }

// else if(mode=='light'){
//     color="white";
//     console.log("color is ",color);
// }

// else{
//     console.log("Invalid mode enter");
// }



// let gender=prompt("Enter the gender");
// let age;

// if(gender=='female'){
//     console.log("Get out");
// }

// else if(gender=='male'){
//     age=prompt("Enter the value of age");
//     if(age>=18&&age<=60){
//         console.log("You are eligible for CNIC");
//     }
//     else if(age<18){
//         console.log("Not eligible for CNIC");
//     }
//     else{
//         console.log("Invalid age enter");
//     }

// }

// else{
//     console.log("inavlid gender enter");
// }


// let age = prompt("Enter the age");
// if(age>=18&&age<=60){
//     console.log("They can vote");
// }
// else if(age<13){
//     console.log("They cant vote");
// }

// else{
//     console.log("Invalid age enter ");
// }

// let x=prompt("Enter the x");
// if(x%2==0){
//     console.log(" even");
// }
// else{
//     console.log("odd");
// }




// for(let i=1;i<=20;i++){
// if(i%2==0){
//     console.log(i,"is even");
// }
// else{
//     console.log(i,"is odd");
// }
// }


// let mode=prompt("Enter the mode");
// let color;
// if(mode=='dark'){
//     color="black";
//     console.log("color is",color);
// }

// else if(mode=='light'){
//     color="white";
//     console.log("color is",color);
// }
// else{
//     console.log("Invalid mode enter");
// }



// let setpass ="abidsheikh123";
// let enterpass =prompt("Enter the password");

// while(setpass!=enterpass){
//     enterpass=prompt("Wrong password enter the pass again");
// }
// console.log("Passsowrd is correct");




