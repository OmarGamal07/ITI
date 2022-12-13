#include <stdio.h>
#include <stdlib.h>

int main()
{
    printf("enter string \n");
    char s[100];
    scanf("%s",s);
    int c=0;
   while(s[c]!='\0')
   {
       c++;
   }
   printf("length =%d",c);
    return 0;
}
