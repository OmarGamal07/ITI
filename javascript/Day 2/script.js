//Arrays

// var arr= new Array();
// var arr2= new Array(10);
// var arr3= new Array(10,20,30,40);

// var arr4= [];
// var arr5=[10,20,30,40];

// // arr5.pop();
// // arr5.push(100);
// // arr5.push(200);

// // arr5.shift();
// // arr5.unshift(100);
// // arr5.unshift(200);

// //arr5.splice(2,0,100,200);
// arr5.splice(1,1);

// for(var i=0;i<arr5.length;i++)
// {
//     console.log(arr5[i]);
// }

// var arr6=[1,2,3];
// var arr7=[4,5,6];
// var arr8=arr6.concat(arr7);

// var d1=new Date();
// //console.log(d1);
// var d2= new Date(2020,10,20,10,50,50,400);
// var d3= new Date(2020,10,10,20,30,40);
// var d4= new Date(2020,10,20,20,10);
// var d5= new Date(2020,10,10,20);
// var d6= new Date(2020,10,20);
// var d7= new Date(2020,10);
// //console.log(d7);

// console.log(d1.getFullYear());
// console.log(d1.getMonth());
// console.log(d1.getDate());
// console.log(d1.getHours());
// console.log(d1.getMinutes());
// console.log(d1.getSeconds());
// console.log(d1.getMilliseconds());

// var date= new Date();
// date.setFullYear(2020);
// date.setMonth(10);
// date.setDate(10);
// date.setHours(20);
// date.setMinutes(30);
// date.setSeconds(20);
// date.setMilliseconds(100);

// console.log(d1.toLocaleString())
// console.log(d1.toLocaleDateString());
// console.log(d1.toLocaleTimeString());

//Math Object

// console.log(Math.round(5.6)); //6
// console.log(Math.round(5.4)); //5
// console.log(Math.pow(2,3))
// console.log(Math.sqrt(25));
// console.log(Math.abs(-10));
// console.log(Math.ceil(4.4));
// console.log(Math.floor(4.6));
// console.log(Math.min(10,20,30,-10,5))
// console.log(Math.max(10,20,30,40,100,8))

// console.log(Math.floor(Math.random()*10))


//Handling error

// try
// {
//   alrt("Hello World")
// }
// catch(exc)
// {
//  console.log(exc.message);
// }
// finally
// {

// }

// var exp=/pattern/modifier;

//   var str = "Visit W3Schools";
//   var patt1 = /w3schools/i;
//   var result = str.match(patt1);
//   console.log(result);

//   var str = "Is this all there is?";
//   var patt1 = /is/ig;
//   var result = str.match(patt1);
//   console.log(result);

//    var str = "\nIs th\nis it?";
//    var patt1 = /^is/img;
//    var result = str.match(patt1);
//    console.log(result)

// var reg=/i.*I/;
// var t=reg.test("jjjj")
// console.log(t)

// var reg=/j.*t/;
// var str="Jscrip is the same of javascript";
// var res=reg.exec(str);
// console.log(res)

//   var str = "Is this all there is?";
//   var patt1 = /[ha]/g; 
//   var result = str.match(patt1);
//   console.log(result)

// var str = "123456789";
// var patt1 = /[0-9]/g;
// var result = str.match(patt1); 
// console.log(result)

//   var str = "re, green, red, green, gren, gr, blue, yellow";
//   var patt1 = /(red|green)/g;
//   var result = str.match(patt1); 
//   console.log(result)

// var str = "Give 100%!"; 
//   var patt1 = /\d/g;
//   var result = str.match(patt1); 
//   console.log(result)

//   var str = "Is this all there is?";
//   var patt1 = /\s/g;
//   var result = str.match(patt1);
//   console.log(result)

var str = "Hellooo World! Hello W3Schools!"; 
var patt1 = /o+/g;
var result = str.match(patt1);
console.log(result) //ooo,o,o,oo

 



 










