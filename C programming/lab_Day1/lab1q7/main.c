#include <stdio.h>
#include <stdlib.h>

int main()
{
    int x,y,quotient,remainder;
    printf("enter 2 number\n");
    scanf("%d%d",&x,&y);
    // Computes quotient
    quotient = x / y;

    // Computes remainder
    remainder = x % y;

    printf("Quotient = %d\n", quotient);
    printf("Remainder = %d", remainder);
    return 0;
}
