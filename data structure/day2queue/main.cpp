#include <iostream>
#include "myqueue.h"
using namespace std;

int main()
{
    Queue q={.first=NULL,.last=NULL};
    enqueue(&q,3);
    enqueue(&q,4);
    enqueue(&q,5);
    enqueue(&q,6);
    enqueue(&q,7);
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
    return 0;
}
