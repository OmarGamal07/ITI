#include <stdio.h>
#include <stdlib.h>
#include<math.h>
typedef struct point
{

    int x,y;
}point;
typedef struct line
{
    point p1,p2;
    float length;
}line;
float change_length(struct line *l)
{
    int x=(l->p2.x-l->p1.x),y=(l->p2.y-l->p1.y);

    return sqrt(y*y+x*x);
}
void change_Position(struct line *l, int newX, int newY)
{
    l->p1.x=newX;
    l->p1.y=newY;
    //l->length=change_length(&l);
}
int main()
{
    line l;
    int x,y,x1,y1,x2,y2;
    printf("enter first point x");
    scanf("%d",&x);
    printf("enter first point y");
    scanf("%d",&y);
    printf("enter chage point x1");
    scanf("%d",&x1);
    printf("enter chage point y1");
    scanf("%d",&y1);
    printf("enter second point x");
    scanf("%d",&x2);
    printf("enter second point y");
    scanf("%d",&y2);
    l.p1.x=x;
    l.p1.y=y;
    l.p2.x=x2;
    l.p2.y=y2;
    change_Position(&l,x1,y1);
    printf("x first point after chage position= %d\n",l.p1.x);
    printf("y first point after chage position= %d\n",l.p1.y);
    printf("x second point after chage position= %d\n",l.p2.x);
    printf("y second point after chage position= %d\n",l.p2.y);
    printf("length= %f\n",change_length(&l));
    return 0;
}
