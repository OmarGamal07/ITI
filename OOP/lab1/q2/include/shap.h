#ifndef SHAP_H
#define SHAP_H
#include<iostream>
using namespace std;
class shap
{
    public:
        shap() {
            d1=0;
            d2=0;
        }

    protected:
        int d1,d2;
        int getarea()
        {
            return d1*d2;
        }
        int getd1()
        {
            return d1;
        }
        int getd2()
        {
            return d2;
        }
        void iam()
        {

            cout<<"shap"<<endl;
        }
    private:

};

#endif // SHAP_H
