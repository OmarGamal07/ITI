// class point
// {
//     private x:number;
//     private y:number;
//     constructor(x:number,y:number)
//     {
//         this.x=x;
//         this.y=y;
//     }
//     static displaylength(p:point,p2:point):number
//     {
//         var xline:number=Math.pow((p.x-p2.x),2);
//         var yline:number=Math.pow((p.y-p2.y),2);
//         return Math.sqrt(xline+yline);
//     }

// }

// var po:point=new point(2,3);
// var po2:point=new point(6,5);
// console.log( point.displaylength(po,po2));



let fullname:string="omar";
let age:string|number;
function display(x:number,y:number):number
    {
        return Math.sqrt(x*y);
    }
interface iperson{
    fname:string;
}
var n:iperson={fname:"sd"};

enum userRoles{
    admin="ADMIN",
    superAdmin="SUPERADMIN",
    manager="MANAGER"
}

var userRole=userRoles.admin;



function getArray<T>(items:T[]):T[]
{
    return new Array().concat(items);
}

var numericArray=getArray([10,20,30,40]);


