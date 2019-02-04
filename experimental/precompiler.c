#include <stdio.h>
#include <string.h>
#include <malloc.h>
#include <stdlib.h>

char* RemoveSpaces(char* source)
{
    char* a = source;
    char* b = source;
    while(*b != 0)
    {
        *a = *b++;
        if(*a != ' ')
            a++;
    }
    *a = 0;
}

char* readLine() {
    char c[1000];
    FILE *fptr;
    if ((fptr = fopen("index.aml", "r")) == NULL)
    {
        printf("Error! opening file");
        exit(1);
    }
    fscanf(fptr,"%[^\n]", c);
    printf("Data from the file:\n%s", c);
    fclose(fptr);
    char *returner = malloc(strlen(c));
    //strcpy(returner, c);
    return returner;
}

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

char* concat2(const char *s1, const char *s2, const char *s3, const char *s4)
{
    char *result = malloc(strlen(s1) + strlen(s2) + + strlen(s3) + strlen(s4));
    strcpy(result, s1);
    strcat(result, s2);
    strcat(result, s3);
    strcat(result, s4);
    return result;
}

char* concat3(const char *s1, const char *s2, const char *s3, const char *s4, const char *s5, const char *s6)
{
    char *result = malloc(strlen(s1) + strlen(s2) + + strlen(s2) + strlen(s4) + strlen(s5) + strlen(s2) + strlen(s3) + strlen(s6));
    strcpy(result, s1);
    strcat(result, s2);
    strcat(result, " ");
    strcat(result, s3);
    strcat(result, s4);
    strcat(result, s5);
    strcat(result, s6);
    strcat(result, s2);
    strcat(result, s4);
    return result;
}

const char * parse() {
    char line[] = "Loading data";
    strcpy(line,readLine());
    printf("%s", line);
    //"h1 -> class=\"nttile\" -> text";
    int i = 0;
    char *p = strtok(line, " -> ");
    char *array[3] = {NULL};
    while (p != NULL)
    {
        array[i++] = p;
        p = strtok(NULL, " -> ");
    }
    //printf("%s", RemoveSpaces(array[0]));
    if (strcmp(array[0], "h1") == 0
            || strcmp(array[0], "h2") == 0
            || strcmp(array[0], "h3") == 0
            || strcmp(array[0], "h4") == 0
            || strcmp(array[0], "h5") == 0
            || strcmp(array[0], "h6") == 0) {
        if (array[2] == NULL) {
            return concat1("<", array[0], ">", array[1], "</");
        } else {
            if (strcmp(array[2], "") == 0
                    || strcmp(array[2], ".") == 0
                    || strcmp(array[2], " ") == 0) {
                return concat2("<", array[0], ">", array[1]);
            } else {
                return concat3("<", array[0], array[1], ">", array[2], "</");
            }
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
