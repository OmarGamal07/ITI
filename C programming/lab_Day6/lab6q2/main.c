#include <stdio.h>
#include <stdlib.h>

void mulip(int arr[],int n)
{
    printf("array =");
    for(int i=0;i<n;i++)
    {
        arr[i]*=10;
        printf(" %d ",arr[i]);
    }
}
int main()
{
    int n, arr[10];
    printf("enter length arrray");
    scanf("%d",&n);
    printf("enter your array");
    for(int i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
    }
    //mulip(&arr,n);
       mulip(arr,n);
    return 0;
}
