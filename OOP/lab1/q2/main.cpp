#include <iostream>
#include"shap.h"
#include"rectangle.h"
#include"circle.h"
#include"square.h"
#include"picture.h"
using namespace std;

int main()
{
    /*rectangle rec(2,3);
    cout<<rec.getarea()<<endl;
    circle cir(2);
    cout<<cir.getarea()<<endl;
    square s(2);
    cout<<s.getarea();*/

     int sizerec,sizecir,sizes;
     cin>>sizerec>>sizecir>>sizes;
        rectangle *rec=new rectangle[sizerec];
        circle *cir=new circle[sizecir];
        square *s=new square[sizes];
        picture p(rec,s,cir,sizerec,sizecir,sizes);
        p.paint();

    return 0;
}
