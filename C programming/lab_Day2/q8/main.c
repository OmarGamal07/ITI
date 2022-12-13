#include <stdio.h>
#include <stdlib.h>

int main()
{
    char s[100];
    int word=0,alpha=0;
   scanf("%[^\n]s", s);

        for(int i=0;s[i];i++)
            {
    	         if(s[i]==' ')
    	          {
    	              word++;
    	          }
    	          else if(isalpha(s[i]))
                  {
                      alpha++;
                  }

 	        }
 	        if(s[0]!=' ') word++;

 	        printf("count alpha is %d \n count world is %d\n",alpha,word);
    return 0;
}
