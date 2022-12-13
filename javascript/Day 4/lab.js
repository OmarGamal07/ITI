////////////////////1///////////////////
function changecapacity(image)
{
   
   if(image.style.opacity==1)
        image.style.opacity=0.3
    else
        image.style.opacity=1    
}


///////////////////2/////////////////

// function changespans()
// {
    
//     var spans=document.getElementsByClassName("spans");
//     var colorArray=['red','green','blue','orange','yellow','brown','gray','lightgray','gold'];
//     for(var i=0;i<spans.length;i++)
//     {
//         var randomcolor=Math.floor(Math.random() *10);
//         var bakgroundcolor=Math.floor(Math.random() *10);
//         spans[i].style.color=colorArray[randomcolor];
//         spans[i].style.backgroundColor =colorArray[bakgroundcolor];
//     }

// }

///////////////3///////////////

function showpassword()
{
    var pass=document.getElementById("pass");
    if(pass.getAttribute("type")=="password")
    {
        pass.setAttribute("type","text");
    }
    else
    {
        pass.setAttribute("type","password");
    }
}


///////////////4///////////////

// var c=0;
// var questions =document.getElementsByClassName("bank");
// function next()
// {
//     c++;
//     if(c<4)
//     {
//         alert(questions[c].innerText);
//     }
//     else
//     {
//         alert("questions finish");
//     }
// }
// function previous()
// {
//     c--;
//     if(c>0)
//     {
//         alert(questions[c].innerText);
//     }
//     else
//     {
//         alert("this is first question");
//     }
// }