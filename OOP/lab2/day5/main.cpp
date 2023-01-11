#include <iostream>
#include"line.h"
#include"point.h"
using namespace std;

int main()
{
    point p1(2,3),p2(4,5);
    line l(&p1,&p2);
    cout<<l.GetLength();
    return 0;
}
