#include <stdio.h>
int main()
{
	int N;
	int array[1000000];
	scanf("%d", &N);


	for (int i = 0; i < N; i++)
	{
		scanf("%d", &array[i]);
	}
	int MAX=array[0], MIN=array[0];
	
	for (int j = 0; j < N; j++)
	{
		if (MAX <= array[j])
			MAX = array[j];
		if (MIN >= array[j])
			MIN = array[j];
	}
	printf("%d %d", MIN, MAX);
	return 0;
}
