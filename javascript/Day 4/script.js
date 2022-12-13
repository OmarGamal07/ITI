// // var firstDiv= document.getElementById("firstDiv");
// // console.log(firstDiv);

// // var classOneElements= document.getElementsByClassName("class1");
// // console.log(classOneElements)

// // var spans= document.getElementsByTagName("span");
// // console.log(spans);

// // var divs=document.querySelectorAll("div.class1");
// // console.log(divs);

// var divOne= document.getElementById("firstDiv");

// function changeDivText()
// {
//     // divOne.innerText="<div>Hello From JS Course</div>"
//     divOne.innerText+="Hello From JS Course"
// }


// function changeDivHTML()
// {
//     var text=prompt("Please enter text")
//     divOne.innerHTML+=`<div>${text}</div>`
// }

// function changePageTitle()
// {
//     document.title="JavaScript Lecture"
// }

// console.log(document.images);

// function changeImageSrc()
// {
//     var myImage= document.getElementById("image1");
//    console.log(myImage.getAttribute("src"));
//    myImage.setAttribute("src","2.jpg");
//    myImage.setAttribute("width","500")
// }

// function addClass()
// {
//     divOne.classList.add("classOne");
// }
// function removeClass()
// {
//     divOne.classList.remove("classOne");
// }

// function toggleClass()
// {
//     divOne.classList.toggle("classOne");
// }

// function changeColor()
// {
//     divOne.style.backgroundColor='blue';
//     divOne.style.color='white';
// }
// function chnageImageSource(image)
// {
//     if(image.getAttribute("src")=="1.jpg")
//     {
//         image.setAttribute("src","2.jpg")
//     }
//     else
//     {
//         image.setAttribute("src","1.jpg") 
//     }
// }


// var parent= document.getElementById("parent");

// parent.addEventListener("click",function(){
//     alert("I'm Parent")
// },true)
// // parent.addEventListener("click",function(){
// //     alert("I'm Parent 2")
// // })

// var child= document.getElementById("child");
// child.addEventListener("click",function(event){
//     alert("Im child")
//     event.stopPropagation();
// },true)

// function appendParagraph()
// {
//     var para = document.createElement("p");
//     var text= document.createTextNode("This is another para");

//     para.appendChild(text);

//     // var parent= document.getElementById("parent");
//     // parent.appendChild(para);
//     var parent= document.getElementById("parent");
//     //insertBefore
//     var child= document.getElementById("p2");

//     // parent.insertBefore(para,child);
//     //parent.removeChild(child);
//     parent.replaceChild(para,child);

// }


function changeColorRandom()
{
    var colorArray=['red','green','blue','orange','yellow','brown','gray','lightgray','gold']

    var paragraphs= document.getElementsByClassName("para");
    
    for(var i=0 ; i<paragraphs.length;i++)
    {
        var randomNumber=Math.floor(Math.random() *10)  
        paragraphs[i].style.color=colorArray[randomNumber];
    }
}
