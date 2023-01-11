#ifndef POINT_H
#define POINT_H


class point
{
    public:
        point() {
            x=0;
            y=0;
        }
        point(int x,int y)
        {

            this->x=x;
            this->y=y;
        }
        int getx()
        {
            return x;
        }
        int gety()
        {
            return y;
        }
    protected:

    private:
        int x,y;
};

#endif // POINT_H
