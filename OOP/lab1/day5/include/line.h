#ifndef LINE_H
#define LINE_H

#include "point.h"
#include<math.h>
class line
{
    public:

        line (point *po1,point *po2)//&obj   ptr
        {
            p1=po1;
            p2=po2;

        }
        int GetLength()
        {
            int x=pow((p1->getx()-p2->getx()),2);
            int y=pow((p1->gety()-p2->gety()),2);
            return sqrt(x+y);
        }

    protected:

    private:
        point *p1;
        point *p2;
      //  int test(point & p)//obj
};

#endif // LINE_H
