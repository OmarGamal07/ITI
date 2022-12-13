#include <stdio.h>
#include <stdlib.h>

#include "Tree.h"

int main()
{
    Tree tree;
    tree.Root = NULL;
    Add(&tree, 150);
    Add(&tree, 100);
    Add(&tree, 50);
    Add(&tree, 25);
    Add(&tree, 10);


    Display(tree.Root);
    printf("depth= %d",GetMaxDepth(tree.Root));
    return 0;
}
