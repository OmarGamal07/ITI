#ifndef BUBBLESORT_H
#define BUBBLESORT_H
#include"linkedlist.h"

void swaap(int *x,int *y)
{
    int temp=*x;
    *x=*y;
    *y=temp;
}
void bubble(linkedlist *b)
{
    Node *curr=b->head;
    int f=0;
    while(curr->Next!=NULL&&f==0)
    {
        f=1;
        Node *cuurindex=b->head;
        while(cuurindex->Next!=NULL)
        {
            if(cuurindex->data > cuurindex->Next->data)
            {
                swaap(&cuurindex->data,&cuurindex->Next->data);
                f=0;
            }
            cuurindex=cuurindex->Next;
        }
        curr=curr->Next;
    }
}

#endif // BUBBLESORT_H
