#ifndef RECTANGLE_H
#define RECTANGLE_H
#include <iostream>
#include"shap.h"
using namespace std;
class rectangle : public shap
{
    public:
        rectangle()
        {

        }
        rectangle(int dim1,int dim2) {
            d1=dim1;
            d2=dim2;
        }
        int getarea()
        {
            return d1*d2;
        }
        void iam()
        {

            cout<<"rec"<<endl;
        }
    protected:

    private:
};

#endif // RECTANGLE_H
