#include <stdio.h>
#include <stdlib.h>

typedef struct employee
{
    int id,age;
    char name[100];

}employee;
employee employeee()
{
    employee emp;
    printf("enter employee id");
    scanf("%d",&emp.id);
    printf("enter employee name ");
    scanf("%s",emp.name);
    printf("enter employee age ");
    scanf("%d",&emp.age);
    return emp;
}
void DisplayEmployee(employee emp)
{
    printf("employee name %s\n",emp.name);
    printf("employee id %d\n",emp.id);
    printf("employee age %d\n",emp.age);
}
int main()
{
    employee emp;
    emp=employeee();
    DisplayEmployee(emp);

    return 0;
}
