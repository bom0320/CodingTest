#include <stdio.h>
int main() 
{
	int H,M,E;
	scanf("%d %d %d", &H,&M,&E);
	M = M + E;
	if (M >= 60)
	{
		H = H + M/60;
		M= M % 60;
	}
	
	if (H > 23)
	{
		H = H%24;
	}

	printf("%d %d",H,M);

		return 0;
}
