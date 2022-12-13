#include <stdio.h>
#include <stdlib.h>

int main()
{
    int sum=0,num;
    do
    {
        scanf("%d",&num);
        sum+=num;
    }while(sum>=100);
    printf("sum=%d",sum);
    /*scanf("%d",&num);
    for(int i=num;i<=100;i++)
    {
        sum+=i;
    }
    printf("sum=%d",sum);*/
    return 0;
}
