#include <stdio.h>
#include <stdlib.h>

int main()
{
    int magicSquare[3][3],sumr=0,sumc=0,suml=0,arr[10];
    // set all slots as 0
    memset(magicSquare, 0, sizeof(magicSquare));
    for(int i=0;i<3;i++)
    {
        for(int j=0;j<3;j++)
        {
            scanf("%d",&magicSquare[i][j]);
        }
    }
     for(int i=0;i<3;i++)
    {
        for(int j=0;j<3;j++)
        {
          sumr+=magicSquare[i][j];
          sumc+= magicSquare[j][i];
           if(i==j)
            suml+=magicSquare[i][j];

        }
         arr[i]=sumr;
         arr[i+3]=sumc;
         arr[6]=suml;
        sumr=0;
        sumc=0;

    }
    arr[7]=magicSquare[0][2]+magicSquare[1][1]+magicSquare[2][0];
    int f=1;
     for(int i=1;i<8;i++)
        {
          if(arr[i]!=arr[i-1])
          {
              printf("no");
              f=0;
              break;
          }

        }
        if(f==1) printf("yes");
    return 0;
}
