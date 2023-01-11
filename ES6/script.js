//1

// var students= ["Ahmed","Mohamed","Ibrahim","Sara","Salma"];

// for(var item in students)
// {
//     console.log(students[item]);
// }

// for(var item of students)
// {
//     console.log(item);
// }
// students.forEach(myFunction);
// function myFunction(item, index) {
//     console.log( index + ": " + item ); 
//   }


//2

// var student = {
//     "Std_name":"omar",
//     "fac_name":"computers and informations",
//     "Uni_name":"assiut",
//     "grad":50
// }
// console.log(`First name is ${student.Std_name} and facalty is ${student.fac_name} and age is ${student.age} and universty ${student.Uni_name}`);

//3

// function maximum(...args)
// {
//     let maxNumber= args[0];
//     for(let i=1;i<args.length;i++)
//     {
//         if(args[i]>maxNumber)
//         {
//             maxNumber=args[i];
//         }
//     }
//     return maxNumber;
// }
// var r1=maximum(10,20,30,1,0.-10,70,5);
// console.log(r1);


//4
// let chars= new Set(['ahmed','omar','ahmed','omar']);
// let newset= new Set(['ahmed','omar',...chars]);

// for(let item of newset)
// {
//     console.log(item);
// }

//5

(()=>{
    let faclty=prompt("enter faclty");
    let depart=prompt("enter department");
    console.log(`welcom in iti ${faclty}  ${depart}`);
})();
//6

// let a=2,b=1;

// [a,b]=[b,a]
// console.log(a,b);

// let x=a;
// a=b;
// b=x;
// console.log(a,b);

//7

// function state(a,b)
// {
//     return [
//         a+b,
//         (a+b)/2,
//         a-b
//     ]
// }

// let [sum,avg,diff]=state(10,5);

// console.log(sum ,avg,diff);

//8
// const odd=[1,3,5,7];
// var students= ["Ahmed","Mohamed","Ibrahim","Sara","Salma",...odd];
// console.log(students);

//9

// let grades = new Map();

// grades.set("omar",{Grades:[
//     {Coursename:"JavaScript", Grade:"Excellent"},
//     {Coursename:"Jquery", Grade:"Good"},
//     {Coursename:"CSS", Grade:"V.Good"}]}
//     );
//     grades.set("omar33",{Grades:[
//         {Coursename:"JavaScript", Grade:"Excellent"},
//         {Coursename:"Jquery", Grade:"Good"},
//         {Coursename:"CSS", Grade:"V.Good"}]}
//         );

//     for (let student of grades.values()) {
//         student.Grades.forEach((key) => {
//             console.log(`${key.Coursename} = ${key.Grade}`);
//           });
//        // console.log(`${student.Grades.Coursename} ${student.Grades.Grade}`);
//       }

// window.onload = function () {
//     var select = document.getElementById("studentgrade");
//     grades.forEach((value, key) => {
//         var option = document.createElement('option');
//         option.text = option.value =option.id= key;
//         select.addEventListener("change",()=>{
//             grades.forEach((value, key) => {
//                 if(key==select.value){
//                     value.Grades.forEach((keygrades) => {
//                         document.write(`${keygrades.Coursename} = ${keygrades.Grade}`);
//                     });
//                 }
               
                  
//             });
           
//         })
//         select.appendChild(option);
//       });

    
    
//};


