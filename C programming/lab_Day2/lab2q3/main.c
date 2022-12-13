#include <stdio.h>
#include <stdlib.h>

int main()
{
    char ch;
    scanf("%c",&ch);
    switch(ch)
    {
        case 'A':
             printf("Excellent");
             break;
        case 'B':
             printf("Very Good");
             break;
        case 'C':
             printf("Good");
             break;
        case 'D':
             printf("fair");
             break;
        case :
            printf("failed");
            break;
        default:
            printf("grade non found");
            break;
    }
    return 0;
}
