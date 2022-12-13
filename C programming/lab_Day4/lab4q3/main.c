#include <stdio.h>
#include <stdlib.h>

int main()
{
    char s[100],s1[100];
    printf("enter destenation\n");
    scanf("%s",s);
    printf("enter source\n");
    scanf("%s",s1);
    for(int i=0;i<strlen(s1);i++)
    {
        s[i]=s1[i];
    }
    s[strlen(s1)]='\0';
    printf("%s",s);
    return 0;
}
