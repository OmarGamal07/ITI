#include <stdio.h>
#include <stdlib.h>
#include "mystack.h"
int main()
{
    stacK s={.top=NULL};
    push(&s,3);
    push(&s,4);
    push(&s,5);
    push(&s,6);
    push(&s,7);
    int n,m;
    n=peak(&s,&m);
    if(n==0)
    {
        printf("stack empty\n");
    }
    else
    {
        printf("top of stack =%d\n",m);
    }
    n=pop(&s,&m);
    if(n==0)
    {
        printf("stack empty\n");
    }
    else
    {
        printf("pop top of stack =%d\n",m);
    }
    n=peak(&s,&m);
    if(n==0)
    {
        printf("stack empty\n");
    }
    else
    {
        printf("top of stack =%d\n",m);
    }
    return 0;
}
