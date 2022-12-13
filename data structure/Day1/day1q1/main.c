#include <stdio.h>
#include <stdlib.h>
#include "Linkedlist.h"
int main()
{
    linkedlist myList = {.head = NULL, .tail = NULL},mynewList = {.head = NULL, .tail = NULL};
    Add(&myList, 3);
    Add(&myList, 4);
    Add(&myList, 6);

    Add(&myList, 7);
    Add(&myList, 9);
//    GetNodeByData(&myList, 3);
  /* InsertAfter(&myList,5,3);
    printf("data =%d\n",GetDataByIndex(&myList,1));
    printf("count linked list =%d\n",GetCount(&myList));
    Display(&myList);
    printf("\n");
   Reverse(&myList,&mynewList);

    Display(&mynewList);
    printf("\n");*/
    InPlaceReverse(&myList);
    Display(&myList);
    return 0;
}
