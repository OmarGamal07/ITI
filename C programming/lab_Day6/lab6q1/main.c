#include <stdio.h>
#include <stdlib.h>

void swap(int*a,int*b)
{
    int temp=*a;
    *a=*b;
    *b=temp;
}
int main()
{
   int a,b;
    printf("enter first number");
    scanf("%d",&a);
    printf("enter second number");
    scanf("%d",&b);
    swap(&a,&b);
    printf("frist after swap%d\n second after swap%d",a,b);
    return 0;
}
