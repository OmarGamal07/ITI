#ifndef LINKEDLIST_H
#define LINKEDLIST_H

typedef struct Node Node;

struct Node
{
    int data;
    Node *Prev, *Next;
};
typedef struct linkedlist
{
  Node*head,*tail;
}linkedlist;

void Add(linkedlist *l,int data)
{
    Node *newNode = malloc(sizeof(Node));
    newNode->data = data;
    newNode->Prev = newNode->Next = NULL;

    if(l->head == NULL)
    {
        l->head = l->tail = newNode;
    }
    else
    {
        l->tail->Next = newNode;
        newNode->Prev = l->tail;
        l->tail = newNode;
    }
}
Node* GetNodeByData(linkedlist *l,int data)
{
    Node *current = l->head;

    while(current != NULL)
    {
        if(data == current->data)
            return current;

        current = current->Next;
    }

    return NULL;
}

void InsertAfter(linkedlist *l,int data, int afterData)
{
    if(l->head==NULL)
        {
            printf("linked list is empty should add first");
            return;
        }
    Node *newNode = malloc(sizeof(Node));
    newNode->data = data;
    newNode->Prev = newNode->Next = NULL;

    Node *node = GetNodeByData(l,afterData);
    if(node ==NULL)
    {
        printf("not found");
        return;
    }
    newNode->Prev=node;
    newNode->Next=node->Next;
    if(l->tail!=node)
    {
        node->Next->Prev=newNode;
    }
    node->Next=newNode;
    if(l->tail==node)
        {

            l->tail=newNode;
        }


}
void Display(linkedlist *l)
{
    Node* current = l->head;

    while(current != NULL)
    {
        printf("%d   ", current->data);
        current = current->Next;
    }
}
int GetDataByIndex(linkedlist *l,int index)
{
     Node *current = l->head;
     int c=0;
    while(current != NULL)
    {
        if(c == index)
            return current->data;

        current = current->Next;
        c++;
    }

    return NULL;
}

int GetCount(linkedlist *l)
{
     Node *current = l->head;
     int c=0;
    while(current != NULL)
    {
        c++;
        current = current->Next;
    }
    return c;
}

void Reverse(linkedlist *l,linkedlist *newl)
{

     Node* current = l->tail;

    while(current != NULL)
    {
        Add(newl,current->data);
        current = current->Prev;
    }

}

void InPlaceReverse(linkedlist *l)
{
   Node* current = l->tail;
   Node*temp;
   while(current != NULL)
    {
        temp=current->Prev;
        current->Prev=current->Next;
        current->Next=temp;
        current = current->Next;
    }
    temp=l->head;
    l->head=l->tail;
    l->tail=temp;
}
#endif // LINKEDLIST_H
