// var x=10;
// console.log(window.x);

// alert("Hello World")
// var result=confirm("Are You Sure To Delete This Item");
// console.log(result);

//Timing Functions

function showMsg()
{
    console.log("Hello world")
}
var timeOut;
function startTimeOut()
{
    timeOut=setTimeout(showMsg,3000);

}

function clearTimeOut()
{
    clearTimeout(timeOut);
}

// var interval=setInterval(showMsg,2000);
// clearInterval(interval);
var interval;
function startClock()
{
 interval=   setInterval(function(){
        var date= new Date();
        document.getElementById("clock").innerHTML=date.toLocaleTimeString();
    },1000)
}

function stopClock()
{
  clearInterval(interval);
}

function openWindow()
{
   // open ("url","name or attribute (_blank by defualt)","specifications (width,height,menubar ,..)","Replace history")
   open("https://www.iti.gov.eg","_blank","width=300,height=300,left=500,top=400");
}

function scrollPageBy()
{
 scrollBy(100,200);
}

function scrollPageTo()
{
 scrollTo(100,200)
}

// clientX
// clientY

//location.href

function assignURL()
{
 location.assign('https://www.iti.gov.eg')
}

function replaceURL()
{
 location.replace('https://www.iti.gov.eg');
}

function displayScreenWidth()
{
 console.log("width is ",screen.width)
}

function displayScreenHeight()
{
 console.log("height is",screen.height)
}

function displayScreenAvailWidth()
{
  console.log("avail width is",screen.availWidth);
}

function displayScreenAvailHeight()
{
 console.log("avail height is",screen.availHeight)
}

