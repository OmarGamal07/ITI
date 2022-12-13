#include <stdio.h>
#include <stdlib.h>

int main()
{
    int sum=0,c,r;
    int avg=0;
    printf("enter number of student");
    scanf("%d",&r);
    printf("enter number of subject");
    scanf("%d",&c);
    int **student=malloc(r*sizeof(int*));
    for(int i=0;i<r;i++)
    {
        student[i]=malloc(c*sizeof(int));
    }
    for(int i=0;i<r;i++)
    {
        printf("enter grades student %d \n",i);
        for(int j=0;j<c;j++)
        {
           scanf("%d",&student[i][j]);
        }
    }
    for(int i=0;i<r;i++)
    {

        for(int j=0;j<c;j++)
        {
            sum+=student[i][j];
        }
        printf("sum grades student %d = %d \n",i,sum);
        sum=0;
    }
    for(int i=0;i<c;i++)
    {

        for(int j=0;j<r;j++)
        {
            avg+=student[j][i];
        }
        //avg=avg/r;
        printf("average of each subject %d = %d \n",i,avg/r);
        avg=0;
    }
    return 0;
}
