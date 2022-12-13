#include <stdio.h>
#include <stdlib.h>

int main()
{
    printf("enter size  array:\n");
    int row,col;
    scanf("%d",&row);
    scanf("%d",&col);
    int arr[row][col];
    printf("enter  array:\n");
    for(int i=0;i<row;i++)
    {
        for(int j=0;j<col;j++)
        {
            scanf("%d",&arr[i][j]);
        }
    }
    int sum[row],avg[col];
    for(int i=0;i<row;i++)
    {
        sum[i]=0;
    }
    for(int i=0;i<col;i++)
    {
        avg[i]=0;
    }
     for(int i=0;i<row;i++)
    {
        for(int j=0;j<col;j++)
        {
            sum[i]+=arr[i][j];
            avg[i]+=arr[j][i];
        }
    }
    printf("sum= \n");
    for(int i=0;i<row;i++)
    {
        printf(" %d",sum);
    }
    printf("avg= \n");
    for(int i=0;i<col;i++)
    {
        printf(" %d",avg);
    }
    return 0;
}
