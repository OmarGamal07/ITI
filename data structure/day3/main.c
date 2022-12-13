#include <stdio.h>
#include <stdlib.h>
#include"bubblesort.h"
#include"linkedlist.h"
#include"binarysearch.h"
int main()
{
    linkedlist myList = {.head = NULL, .tail = NULL},mynewList = {.head = NULL, .tail = NULL};
     Add(&myList, 9);
      Add(&myList, 4);
    Add(&myList, 3);

    Add(&myList, 6);
    Add(&myList, 1);
    Add(&myList, 7);


    bubble(&myList);
    Display(&myList);
       int res=binarysearch(&myList,6);
       printf("\n");
    printf("the result search is:%d\n",res);
    return 0;
}
