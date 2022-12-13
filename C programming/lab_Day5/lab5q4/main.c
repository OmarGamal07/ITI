#include <stdio.h>
#include <stdlib.h>

typedef struct department
{
  int id;
  char name[100];
}department;
typedef struct employee
{
    int id,age;
    char name[100];
    department dep;

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
        printf("enter employee department id: ");
        scanf("%d",&emps[i].dep.id);
        printf("enter employee department name: ");
        scanf("%d",&emps[i].dep.name);
    }
    for(int i=0;i<n;i++)
    {

        printf(" employee %d name: %s \n",i,emps[i].name);
        printf(" employee %d  id: %d \n",i,emps[i].id);
        printf("employee %d  age: %d\n",i,emps[i].age);
        printf("employee %d  department id: %d\n",i,emps[i].dep.id);
        printf("employee %d  department name: %s\n",i,emps[i].dep.name);
    }
    return 0;
}
