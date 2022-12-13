#include <stdio.h>
#include <stdlib.h>

typedef struct employee
{
    int id,age;
    char name[100];

}employee;
int main()
{
    employee emps[100];
    printf("enter number of employee you need \n");
    int n;
    scanf("%d",&n);
    printf("enter employee");
    for(int i=0;i<n;i++)
    {

        printf("enter employee name: ");
        scanf("%s",&emps[i].name);
        printf("enter employee id: ");
        scanf("%d",&emps[i].id);
        printf("enter employee age: ");
        scanf("%d",&emps[i].age);
    }
    for(int i=0;i<n;i++)
    {

        printf(" employee %d name: %s \n",i,emps[i].name);
        printf(" employee %d  id: %d \n",i,emps[i].id);
        printf("employee %d  age: %d\n",i,emps[i].age);
    }
    return 0;
}
