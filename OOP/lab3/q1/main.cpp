#include <iostream>
#include"multi.h"
using namespace std;

int pow(int x,int y)
{
    int e;
    if(y==0)
        return 1;
    else
    {
        y--;
        e=pow(x,y)*x;


    }
   return e;
}
int main()
{
     cout<<pow(5,5)<<endl;
    grandparent g;
    parent p;
    child c;
    g.displaygrandpublic();
    p.displaygrandpublic();
    //c.displaygrandprotected();
   // c.displaygrandprivate();
    //c.displaygrandpublic();
    c.displaygrandprotected();
    c.displaygrandpublic();
    c.displayparentpublic();
    //c.displayparentprotected();
    //c.displayparentprotected();
    //c.displayparentpublic();



    cout << "Hello world!" << endl;
    return 0;
}
