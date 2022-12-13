#include <stdio.h>
#include <stdlib.h>

int main()
{
    int x,y,z,max;
    scanf("%d",&x);
    scanf("%d",&y);
    scanf("%d",&z);
    if(x>=y&&x>=z)
    {
        max=x;
    }
    else if(y>=z&&y>=x)
    {
        max=y;
    }
    else
    {

        max=z;
    }
    printf("largeest is %d",max);
    return 0;
}
