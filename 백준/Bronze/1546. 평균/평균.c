#include <stdio.h>

int main()
{
	int N;
	int arr[1000];
	scanf("%d", &N);
	int max = -1;
	for (int i = 0; i < N; i++)
	{
		scanf("%d", &arr[i]);
		if (arr[i] > max)
			max = arr[i];
	}
	float sum = 0;
	for (int j = 0; j < N; j++)
	{
		sum = sum + (float)arr[j] / max * 100;
	}
	printf("%f", sum / N);

	return 0;
}

