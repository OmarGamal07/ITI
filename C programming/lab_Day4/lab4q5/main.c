#include <stdio.h>
#include <stdlib.h>

int main()
{
    printf("enter string \n");
    char s[100],s1[100];
    int c=0;
    scanf("%s",s);
    for(int i=0;i<strlen(s);i++)
    {
        if(isalpha(s[i]))
        {
            s1[c]=s[i];
            c++;
        }
    }
    printf("new string =%s",s1);
    return 0;
}
