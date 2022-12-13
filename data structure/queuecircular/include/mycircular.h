#ifndef MYCIRCULAR_H
#define MYCIRCULAR_H
#define maxq 3
typedef struct  Queue
{
    int data[maxq];
    int first,last;

}Queue;

void enqueue(Queue*q,int n)
{
    if((q->first==0&&q->last==maxq-1)||(q->first-1==q->last))
    {
        return;
    }
    if(q->first==-1) q->first=0;
    if(q->first!=0&&q->last==maxq-1)
    {
        q->last=0;
        q->data[q->last]=n;
    }
    else
    {
        q->last++;
        q->data[q->last]=n;
    }

}


int dequeue(Queue*q,int *n)
{
    if(q->first==-1&&q->last==-1)
    {
        return 0;
    }
    if(q->first==q->last)
    {
        *n=q->data[q->first];
        q->first=q->last=-1;
    }
    else
    {
        *n=q->data[q->first];
        q->first++;
    }
    return 1;
}
int peak(Queue*q,int *n)
{
    if(q->first==-1&&q->last==-1)
    {
        return 0;
    }
    *n=q->data[q->first];
    return 1;
}
#endif // MYCIRCULAR_H
