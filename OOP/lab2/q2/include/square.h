#ifndef SQUARE_H
#define SQUARE_H
#include <iostream>
#include"rectangle.h"
using namespace std;
class square : public rectangle
{
    public:
        square(){}
        square(int r) :rectangle(r,r) {
            d1=r;
            d2=r;
        }
        int getarea()
        {
            return d1*d1;
        }
         void iam()
        {

            cout<<"square"<<endl;
        }
    protected:

    private:
};

#endif // SQUARE_H
