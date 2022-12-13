// alert("external file")

//Output statements

//alert("Hello world")

//document.write("Hello World")

//document.getElementById("divOne").innerHTML="Hello World again";

//console.log("ok")

//Variables

// var x =10;
// var y =30

// var z
// z=50;
// console.log(z)

// var firstName="Ahmed";
// console.log(firstName)

// var isActive=true;

// var str="Ahmed",
//     str2="Asmaa"

// str=100;

// var message;
// console.log(message); //undefined
// console.log(counter);


//Json object

// var person= {
//     "firstName":"Ahmed",
//     "lastName":"Mohamed",
//     "isActive":true
// }

// console.log(person.firstName);


//var fullName= "Abanoub" + " " + "Nabil"

// var x=100;

// if(x>50)
// {
//     console.log("Greater than 50")
// }
// else if(x==50)
// {
//     console.log("Equal to 50")
// }
// else
// {
//     console.log("smaller than 50");
// }


// var day =3;

// var dayName;

// switch(day)
// {
//     case 1 :
//         dayName="sunday";
//         break;
//     case 2 :
//         dayName="Monday";
//         break;
//     case 3 :
//         dayName="Tuesday";
//         break;
//     case 4 :
//         dayName="Wedensday";
//         break;
//     case 5 :
//         dayName="Thursday";
//         break;
//     case 6 :
//         dayName="Friday";
//         break;
//     case 7  :
//         dayName="Saturday";
//         break;
//     default :
//         dayName="invalid day";                            
// }


// for(var counter=1 ;counter <5 ; counter++)
// {
//   console.log("inside the loop " +counter);
// }

// var count =1 ;
// while(count<10)
// {
//     console.log(count);
//     count ++;
// }

// var count =0;
// do{
//     count ++;
//     console.log(count);
// }while(count<10);


//functions

//simple function
function showMsg()
{
    console.log("Hello World")
}

showMsg();

//parametarized function

// function sumThreeNumbers(x,y,z)
// {
//     console.log(x+y+z);
// }

// sumThreeNumbers(10,20,30);

// function sumThreeNumbers(x,y,z)
// {
//     var res=x+y+z;
//     return res;
// }

// var result=sumThreeNumbers(10,20,30);
// console.log(result);

// var res=function(){
//     console.log('ITI');
// }

// res();

// var numberOne= parseInt(prompt("Please enter the first number")) ;
// var numberTwo=parseInt(prompt("Please enter the second number")) ;

// (function(x,y){
//     console.log(x+y)
// })(numberOne,numberTwo);


//events

// function printMsg()
// {
//     console.log("welcome to ITI");
// }

// function alertMessage()
// {
//     alert("Welcome to ITI")
// }

//strings
// var txt="Ahmed Mohamed";
// console.log(txt.length);

var str="Please locate where 'locate' occurs!";

// var pos=str.indexOf('locate');
// console.log(pos)
// var pos=str.lastIndexOf('locate');
// console.log(pos)
// var pos=str.indexOf('locate',10);
// console.log(pos)

//var str="Apple, Banana, Kiwi";
//var res= str.slice(7,13);
//var res= str.slice(-12,-6);

//var res= str.substring(7,13);

// var str="Please Visit Google and Google";
// var n = str.replace("Google","ITI");
// console.log(n);

// var str="Abanoub Nabil";
// console.log(str.toUpperCase())

// var text1="Hello"
// var text2="World";
// var text3=text1.concat(" " ,text2);

// var characterOne= text1.charAt(1);

// console.log(isFinite("123a"))
// console.log(isNaN("123"))

var expertion= prompt("Please enter you expression");

console.log(eval(expertion));


