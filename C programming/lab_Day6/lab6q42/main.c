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

void makelines(line *ptr,int n)
{


    for(int i=0;i<n;i++)
    {
        int x,y,x1,y1,x2,y2;
    printf("enter first point x");
    scanf("%d",&x);
    printf("enter first point y");
    scanf("%d",&y);

    printf("enter second point x");
    scanf("%d",&x2);
    printf("enter second point y");
    scanf("%d",&y2);
    ptr[i].p1.x=x;
    //printf("%d",ptr[i].p1.x);
    ptr[i].p1.y=y;
    ptr[i].p2.x=x2;
    ptr[i].p2.y=y2;

    }


}
void  displaylines(line *l,int n)
{
    for(int i=0;i<n;i++)
    {
        printf("x first point after chage position= %d\n",l[i].p1.x);
        printf("y first point after chage position= %d\n",l[i].p1.y);
       printf("x second point after chage position= %d\n",l[i].p2.x);
       printf("y second point after chage position= %d\n",l[i].p2.y);
       printf("length= %f\n",change_length(&l[i]));
    }

}
int main()
{
    int n;
    printf("enter number of line");
    scanf("%d",&n);
    line *ptr=malloc(n*sizeof(line));
    makelines(&ptr,n);
    displaylines(&ptr,n);
    return 0;
}
