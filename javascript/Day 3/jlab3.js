

//  function check()
 
//  {
//    var str=document.getElementById("textbox").value;
//    var patt1 = /^[a-zA-z]$/;
//    var result = patt1.test(str);
//     console.log(result);
//     if(result==false)
//     {
//         alert("invalid");
//     }
//  }


//  var interval;
// function start()
// {
//  interval=   setInterval(function(){
//         var date= new Date();
//         document.getElementById("clock").innerHTML=date.toLocaleTimeString();
//     },1000)
// }

// function stop()
// {
//   clearInterval(interval);
// }

// var myWindow;

// function showMsg()
// {
//      myWindow = window.open("", "myWindow", "width=200,height=100");   // Opens a new window
// myWindow.document.write("<p>This is 'myWindow' my name omar hello my name omar hello my name omar hello my name omar hello my name omar hello</p>");   // Text in the new window
// }
// var timeOut;
// function startTimeOut()
// {
//     timeOut=setTimeout(showMsg,3000);

// }

// function clearTimeOut()
// {
//     myWindow.close();   // Closes the new window

//     clearTimeout(timeOut);
// }



//  var url = location.href;
//  function getUrl(){
//      var arr= url.split("user=",2);
     
//      var name = arr[1].split("&",1);
//      console.log(name);
//     return name.toString();
//  }
// document.getElementById("welcom").innerText = "welcom" + " "+ getUrl();


function scrollPageTo()
 {
  scrollBy(100,200)
 }

 var interval;
 function startClock()
{
 interval=   setInterval(scrollPageTo,1000);
}
startClock();

function stop(){
    clearInterval(interval);
 }




var d1 = new Date(); //"now"
var d2 = new Date(2023,06,30);  // some date
var d3=new Date(d2.getFullYear()-d1.getFullYear(),d2.getMonth()-d1.getMonth(),d2.getDate()-d1.getDate());
var diff = Math.abs(d1.getFullYear()-d2.getFullYear()); 

console.log(d3);
var deadline = new Date("June 30, 2023 23:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var year = Math.floor(t / (1000 * 60 * 60 * 24*30*12));
var month = Math.floor(t / (1000 * 60 * 60 * 24*30));
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("time").innerHTML = days + "d " 
+ hours + "h " + minutes + "m " + seconds + "s"+" mo "+month + " y " + year;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "EXPIRED";
    }
}, 1000);

console.log(dathour);

