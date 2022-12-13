#include <stdio.h>
#include <stdlib.h>
#include<windows.h>
#include <string.h>

COORD coord={0,0};                   // this is global variable
                                    //center of axis is set to the top left cornor of the screen
 void gotoxy(int x,int y)
 {
   coord.X=x;
   coord.Y=y;
   SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE),coord);
 }
int main()
{
  char con;
   do
   {
        int choice;
        char s[1000];
    gotoxy(20,15);
    printf("press 1 if you need Multiplication Table\n");
    gotoxy(20,16);
    printf("press 2 if you need to Check Whether a Character is an Alphabet or not\n");
    gotoxy(20,17);
    printf("press 3 if you needto count number of Alphabets & number of words\n");
    gotoxy(20,18);
    printf("press 1 if you need to display MagicBox\n");
    scanf("%d",&choice);
    system("Cls");
    printf("you choice %d \n",choice);
    int multi,word,alpha;
    char ch;

    switch(choice)
    {

    case 1:

         scanf("%d",&multi);
        for(int i=0;i<=12;i++)
        {
            printf("%d * %d=%d \n",i,multi,i*multi);
        }
        break;
    case 2:
        ch=getch();
        if(isalpha(ch))
        {
            printf("Yes");
        }
        else
        {
            printf("NO");
        }
        break;


    }
    printf("press y to continue\n");
    con=getch();
   }while(con=='y'||con=='Y');
    return 0;
}
