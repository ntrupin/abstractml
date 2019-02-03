#include <stdio.h>
#include <string.h>
#include <malloc.h>

char* concat1(const char *s1, const char *s2, const char *s3, const char *s4, const char *s5)
{
    char *result = malloc(strlen(s1) + strlen(s2) + + strlen(s2) + strlen(s4) + strlen(s5) + strlen(s2) + strlen(s3));
    strcpy(result, s1);
    strcat(result, s2);
		strcat(result, s3);
		strcat(result, s4);
		strcat(result, s5);
		strcat(result, s2);
		strcat(result, s3);
    return result;
}

const char * parse() {
	char line[] = "h1 -> args";
  int i = 0;
  char *p = strtok(line, " -> ");
  char *array[3] = {NULL};
  while (p != NULL)
  {
		array[i++] = p;
    p = strtok(NULL, " -> ");
  }
  if (strcmp(array[0], "h1") == 0 
			|| strcmp(array[0], "h2") == 0
			|| strcmp(array[0], "h3") == 0
			|| strcmp(array[0], "h4") == 0
			|| strcmp(array[0], "h5") == 0
			|| strcmp(array[0], "h6") == 0) {
			if (array[2] == NULL) {
				return concat1("<", array[0], ">", array[1], "</");
			} else {
				return array[2];
			}
	} else if (strcmp(array[0], "div") == 0) {
		return "div";
	} else {
		return "else";
	};
}

int main(void) {
	printf("%s", parse());
}
