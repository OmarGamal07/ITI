#include <stdio.h>
#include <stdlib.h>

int main()
{
    /*int salary;
    scanf("%d", &salary);

    if(salary < 5000)
    {
        salary = salary + 500;
    }

    printf("Net Salary = %d", salary);*/

    /*int number;
    scanf("%d", &number);

    if(number > 0)
    {
        printf("Positive");
    }
    else if(number < 0 )
    {
        printf("Negative");
    }
    else
    {
        printf("Zero");
    }*/

    /*int temp;
    scanf("%d", &temp);

    /*if(temp == 100)
    {
        printf("Boiling");
    }
    else if(temp == 0)
    {
        printf("Freezing");
    }
    else if(temp == 37)
    {
        printf("Human body");
    }
    else
    {
        printf("NO match");
    }*/

    /*switch(temp)
    {
        case 100:
        case 150:
            printf("Boiling");
            break;
        case 0:
            printf("Freezing");
            break;
        case 37:
            printf("Human Body");
            break;
        default:
            printf("No match");
            break;
    }*/

    int counter;

    /*for(counter = 1; counter < 5 ; counter++)
    {
        printf("%d - Hello \n", counter);
    }*/

    /*counter = 1;
    while(counter < 5)
    {
        printf("%d - Hello \n", counter);

        counter++;
    }*/

    char ch;

    /*do
    {
        printf("Hello");

        printf("\n press y too continue");
        ch = getche();

    }while(ch == 'y');*/

    /*int maxNumber = 5;

    do
    {
        for(counter = 0; counter < maxNumber ; counter++)
        {
            printf("%d - Hello \n", counter);
        }

        printf("\n press y too continue\n");
        printf("====================");
        ch = getche();

        if(ch == 'y')
        {
            printf("Plz enter max loops:");
            scanf("%d", &maxNumber);
        }

    }while(ch == 'y');*/

    /*for(counter = 0; counter < 5; counter++)
    {
        int index;
        for(index = 0; index < 3; index++)
        {
            printf("Counter = %d \t Index = %d\n", counter, index);
        }

        printf("======================\n");
    }*/

    int loop = 1;
    while(loop)
    {
        if(counter >= 5)
            loop = 0;

        if(counter % 2 ==0)
            loop = 0;


        counter++;
    }

    return 0;
}
