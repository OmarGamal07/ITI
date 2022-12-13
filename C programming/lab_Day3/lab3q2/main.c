#include <stdio.h>
#include <stdlib.h>

int main()
{
    printf("enter size array:\n");
    int size;
    scanf("%d",&size);
    int arr[size];
    printf("enter  array:\n");
    for(int i=0;i<size;i++)
    {
        scanf("%d",&arr[i]);
    }
    int max=arr[0];
    for(int i=1;i<size;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    printf("max number is %d",max);
    return 0;
}
