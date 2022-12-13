/*var arr= new Array("array","date","datatype","loop","for loop","while loop","do while loop","alert","prompt","asd");
console.log(arr[Math.floor(Math.random()*10)]);*/

function date()
{
    var d= new Date();
    console.log(d.toLocaleString())
}

/*var arr1=new Array (1,2,3,1,1,2);
function findNumber(arr,n)
{
    var c=0;
   for(var i=0;i<arr.length;i++)
   {
     if(arr[i]==n)
     {
        c++;
     }
   }
   return c;
}

console.log(findNumber(arr1,1));*/


/*var arr1=new Array ('a','b','c','d');

function removechar(arr,c)
{
    var i=0;
   while(arr[i]!=c)
   {
    i++;
   }
   arr.splice(i,1);
}

removechar(arr1,'c');
for(var i=0;i<arr1.length;i++)
   {
     console.log(arr1[i]);
   }
*/
var arr1=new Array (1,2,3,100,50,70);
function findmax(arr)
{
    var mx=arr[0];
    for(var i=1;i<arr.length;i++)
     {
       mx=Math.max(mx,arr[i]);
     }
     return mx;
}
console.log(findmax(arr1));
