#include <stdio.h>
#include <stdlib.h>

int main()
{
    printf("enter size array:\n");
    int size;
    scanf("%d",&size);
    int arr[size];
    printf("enter array:\n");
    for(int i=0;i<size;i++)
    {
        scanf("%d",&arr[i]);
    }
    printf("your array is\n");
    for(int i=0;i<size;i++)
    {
        printf(" %d",arr[i]);
    }

    return 0;
}
