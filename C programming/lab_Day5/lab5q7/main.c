#include <stdio.h>
#include <stdlib.h>
typedef struct time
{
  int second,minuts,hours;
}time;
int main()
{
    time t1,t2;
    scanf("%d",&t1.hours);
    scanf("%d",&t1.minuts);
    scanf("%d",&t1.second);
    scanf("%d",&t2.hours);
    scanf("%d",&t2.minuts);
    scanf("%d",&t2.second);


    if(t1.second > t2.second)
    {
        t2.second += 60;
        --t2.minuts;
    }

    if(t1.minuts > t2.minuts)
    {
        t2.minuts += 60;
        --t2.hours;
    }
     printf("diffrence hours %d\n",t2.hours-t1.hours);
     printf("diffrence minuts %d\n",t2.minuts-t1.minuts);
    printf("diffrence second %d\n",t2.second-t1.second);


    return 0;
}
