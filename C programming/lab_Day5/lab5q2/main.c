#include <stdio.h>
#include <stdlib.h>

typedef struct employee
{
    int id,age;
    char name[100];

}employee;

int main()
{
    employee emp;
    printf("enter employee id");
    scanf("%d",&emp.id);
    printf("enter employee name ");
    scanf("%s",emp.name);
    printf("enter employee age ");
    scanf("%d",&emp.age);

    printf("employee name %s\n",emp.name);
    printf("employee id %d\n",emp.id);
    printf("employee age %d\n",emp.age);
    return 0;
}
