#include <stdio.h>
#include <stdlib.h>
#include<string.h>

int main()
{
    char namefirst[100];
    char namesecond[100],full[200]="";
    printf("enter first name");
    scanf("%s",&namefirst);
    printf("enter second name");
    scanf("%s",&namesecond);
    printf("enter full name\n");
    strcat(full,namefirst);
    strcat(full,namesecond);
    //printf("%s %s",namefirst,namesecond);
    printf("%s ",full);
    return 0;
}
