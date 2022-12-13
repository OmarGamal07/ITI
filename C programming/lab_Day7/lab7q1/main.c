#include <stdio.h>
#include <stdlib.h>

typedef struct emloyee
{
    int id,age;
    char name[100];
}employee ;
int main()
{
    employee *arr[3];
    int arrnumberemployee[2];
    int n=0;
    for(int i=0;i<3;i++)
    {
        printf("pointer employee %d size",i);
        scanf("%d",&n);
        arrnumberemployee[i]=n;
        arr[i]=malloc(n*sizeof(employee));
    }
    for(int i=0;i<3;i++)
    {
        for(int j=0;j<arrnumberemployee[i];j++)
        {
            printf("enter id index employee %d  employee number %d ",i,j);
          scanf("%d",&arr[i][j].id);
          printf("enter age index employee %d  employee number %d ",i,j);
          scanf("%d",&arr[i][j].age);
          printf("enter  name  index employee %d employee number %d ",i,j);
          scanf("%s",&arr[i][j].name);
        }
    }
      for(int i=0;i<3;i++)
    {
        for(int j=0;j<arrnumberemployee[i];j++)
        {
            printf("id index employee %d  employee number %d= %d \t",i,j,arr[i][j].id);
            printf("age index employee %d  employee number %d= %d \t",i,j,arr[i][j].age);
            printf("name index employee %d  employee number %d= %s",i,j,arr[i][j].name);
            printf("\n");
        }

    }
    return 0;
}
