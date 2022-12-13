#ifndef BINARYSEARCH_H
#define BINARYSEARCH_H
#include"linkedlist.h"

int binarysearch(linkedlist *l,int item)
{

    int minindex=0,maxindex=GetCount(l)-1,mid;
    //printf("count %d\n",maxindex);
    while(minindex<=maxindex)
    {
        mid=(minindex+maxindex)/2;
        int x=GetDataByIndex(l,mid);
        //printf("index %d\n",x);
        if(item==x)
            return mid;
        if(item > x)
            minindex=mid+1;
        else
            maxindex=mid-1;
    }
    return -1;
}

#endif // BINARYSEARCH_H
