class  rectangle 
{
   protected  w:number;
   protected  h:number;
   constructor(w,h)
   {
    this.w=w;
    this.h=h;
   }
   CalcCircumference():number
   {

        return 2*this.w*this.h;
   }
   static	WhoAmI():string
    {
        return "iam rect";
    }
   
}

class  square extends rectangle 
{
   //private  length:number;
   constructor(length)
   {
        super(length,length);
   }
   CalcCircumference():number
   {

        return 2*this.w*this.h;
   }
   static	WhoAmI():string
    {
        return "iam square";
    }
   
}

var rec =new rectangle(2,2);
console.log(rec.CalcCircumference());
console.log(rectangle.WhoAmI());
var s=new square(2);
console.log(s.CalcCircumference());
console.log(square.WhoAmI());