#ifndef CIRCLE_H
#define CIRCLE_H
#include <iostream>
#include"shap.h"
using namespace std;
class circle : public shap
{
    public:
        circle()
        {

        }
        circle(int r) {
            d1=r;
            d2=r;
        }
        int getarea()
        {
            return 3.14*d1*d2;
        }
        void iam()
        {

            cout<<"cir"<<endl;
        }
    protected:

    private:
};

#endif // CIRCLE_H
