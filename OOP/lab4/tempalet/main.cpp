#include <iostream>
#include"list.h"
using namespace std;

int main()
{
    list <int>l;
    try{
        l.getlast();
    }
    catch(const char* msg){
        cout<<msg<<endl;
    }
    l.add(1);
    l.add(2);
    l.add(3);
    try{

        //l.display();
        //cout<<l.getbyindex(1)<<endl;
       cout<< l.Remove(20)<<endl;
        l.display();
    }
    catch(const char* msg){
        cout<<msg<<endl;
    }
    l.display();
    return 0;
}
