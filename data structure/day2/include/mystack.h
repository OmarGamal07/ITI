#ifndef STACK_H
#define STACK_H
typedef struct Node Node;
struct Node
{
    int data;
    Node *Next;
};
typedef struct stacK
{
    Node *top;
}stacK;

void push(stacK *s,int n)
{
    Node *newnode=malloc(sizeof(Node));
    newnode->data=n;
    newnode->Next=s->top;
    s->top=newnode;

}
int pop(stacK*s,int *n)
{
    if(s->top==NULL)
    {
        return 0;
    }
    *n=s->top->data;
    s->top=s->top->Next;
    return 1;
}
int peak(stacK*s,int *n)
{
    if(s->top==NULL)
    {
        return 0;
    }
    *n=s->top->data;
    return 1;
}
#endif // STACK_H
