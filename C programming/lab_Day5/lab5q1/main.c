#include <stdio.h>
#include <stdlib.h>
int large(int a,int b,int c)
{
    int max=0;
    if(a>max) max=a;
    if(b>max) max=b;
    if(c>max) max=c;
    return max;
}
int main()
{
   int a,b,c;
   scanf("%d",&a);
   scanf("%d",&b);
   scanf("%d",&c);
   printf("max number =%d",large(a,b,c));
    return 0;
}
