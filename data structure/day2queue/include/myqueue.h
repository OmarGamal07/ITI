#ifndef MYQUEUE_H
#define MYQUEUE_H

typedef struct Node Node;
struct Node
{
    int data;
    Node *Next;
};
typedef struct  Queue
{
    Node *first,*last;
}Queue;


void enqueue(Queue *q,int n)
{
    Node *newnode=(Node*)malloc(sizeof(Node));
    newnode->data=n;
    newnode->Next=NULL;
    if(q->first==NULL)
    {
        q->first=q->last=newnode;

    }
    else
    {
        q->last->Next=newnode;
        q->last=newnode;
    }
}

int dequeue(Queue*q,int *n)
{
    if(q->first==NULL)
    {
        return 0;
    }
    *n=q->first->data;
    q->first=q->first->Next;
    return 1;
}

int peak(Queue*q,int *n)
{
    if(q->first==NULL)
    {
        return 0;
    }
    *n=q->first->data;
    return 1;
}
#endif // MYQUEUE_H
