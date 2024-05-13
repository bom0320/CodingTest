#include <stdio.h>
int main()
{
    int max;
    int count = 0;
    max = 0;
    int array[9] = {0};
    for (int i = 0; i < 9; i++)
    {
        scanf("%d\n", &array[i]);
        if (max < array[i])
        {
            max = array[i];
            count = i + 1;
        }


    }
        printf("%d\n", max);
        printf("%d", count);
    return 0;
} 