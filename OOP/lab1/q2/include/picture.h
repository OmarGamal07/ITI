#ifndef PICTURE_H
#define PICTURE_H
#include <iostream>
#include"rectangle.h"
#include"circle.h"
#include"square.h"
using namespace std;
class picture
{
    public:
        picture(rectangle *rec1,square *s1,circle *cir1, int sizerec1,int sizecir1,int sizes1) {
            rec=rec1;
            s=s1;
            cir=cir1;
            sizerec=sizerec1;
            sizecir=sizecir1;
            sizes=sizes1;
        }
        void iam()
        {

            cout<<"picture"<<endl;
        }

        void paint()
        {
            for(int i=0;i<sizerec;i++)
            {
                rec[i].iam();
            }
            for(int i=0;i<sizerec;i++)
            {
                s[i].iam();
            }
            for(int i=0;i<sizerec;i++)
            {
                cir[i].iam();
            }
        }
    protected:

    private:
        rectangle *rec;
        square *s;
        circle *cir;
        int sizerec,sizecir,sizes;

};

#endif // PICTURE_H
