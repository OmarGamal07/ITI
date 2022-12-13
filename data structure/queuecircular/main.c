#include <stdio.h>
#include <stdlib.h>
#include "mycircular.h"
int main()
{
    Queue q={.first=-1,.last=-1};
    enqueue(&q,1);
    enqueue(&q,2);
    enqueue(&q,3);
     int n,m;
      n=peak(&q,&m);
    if(n==0)
    {
        printf("queue empty\n");
    }
    else
    {
        printf("first of queue =%d\n",m);
    }
     n=dequeue(&q,&m);
     if(n==0)
    {
        printf("queue empty\n");
    }
    else
    {
        printf("dequeue first of queue =%d\n",m);
    }
     n=peak(&q,&m);
    if(n==0)
    {
        printf("queue empty\n");
    }
    else
    {
        printf("first of queue =%d\n",m);
    }
    enqueue(&q,4);
     n=peak(&q,&m);
    if(n==0)
    {
        printf("queue empty\n");
    }
    else
    {
        printf("first of queue =%d\n",m);
    }
    //enqueue(&q,5);
    return 0;
}
