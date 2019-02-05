#include <stdio.h>
#include <string.h>
#include <malloc.h>
#include <stdlib.h>

char *trimwhitespace(char *str)
{
    char *end;
    while(isspace((unsigned char)*str)) str++;
    if(*str == 0)
        return str;
    end = str + strlen(str) - 1;
    while(end > str && isspace((unsigned char)*end)) end--;
    end[1] = '\0';
    return str;
}

char* concat1(char *s1, char *s2, char *s3, char *s4, char *s5)
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

char* concat2(char *s1, char *s2, char *s3, char *s4)
{
    char *result = malloc(strlen(s1) + strlen(s2) + + strlen(s3) + strlen(s4));
    strcpy(result, s1);
    strcat(result, s2);
    strcat(result, s3);
    strcat(result, s4);
    return result;
}

char* concat3(char *s1, char *s2, char *s3, char *s4, char *s5, char *s6)
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

char* concat4(char *s1, char *s2, char *s3, char *s4)
{
    char *result = malloc(strlen(s1) + strlen(s2) + + strlen(s3) + strlen(s4));
    strcpy(result, s1);
    strcat(result, s2);
    strcat(result, " ");
    strcat(result, s3);
    strcat(result, s4);
    return result;
}

const char * parse(char * gotten) {
    char *line = malloc(strlen(gotten));
    strcpy(line,gotten);
    int i = 0;
    char delim[] = "->";
    char *p = strtok(line, delim);
    char *array[3] = {NULL};
    while (p != NULL)
    {
        //printf("%s\n",trimwhitespace(p));
        array[i++] = trimwhitespace(p);
        p = strtok(NULL, delim);
    }
    if (strcmp(array[0], "h1") == 0
            || strcmp(array[0], "h2") == 0
            || strcmp(array[0], "h3") == 0
            || strcmp(array[0], "h4") == 0
            || strcmp(array[0], "h5") == 0
            || strcmp(array[0], "h6") == 0
            || strcmp(array[0], "p") == 0
            || strcmp(array[0], "time") == 0
            || strcmp(array[0], "a") == 0
            || strcmp(array[0], "abbr") == 0
            || strcmp(array[0], "button") == 0
            || strcmp(array[0], "li") == 0
            || strcmp(array[0], "small") == 0
            || strcmp(array[0], "u") == 0
            || strcmp(array[0], "b") == 0
            || strcmp(array[0], "s") == 0
            || strcmp(array[0], "strong") == 0) {
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
    } else if (strcmp(array[0], "div") == 0
               || strcmp(array[0], "section") == 0
               || strcmp(array[0], "article") == 0
               || strcmp(array[0], "span") == 0
               || strcmp(array[0], "center") == 0
               || strcmp(array[0], "header") == 0
               || strcmp(array[0], "nav") == 0
               || strcmp(array[0], "main") == 0
               || strcmp(array[0], "form") == 0
               || strcmp(array[0], "table") == 0
               || strcmp(array[0], "th") == 0
               || strcmp(array[0], "tr") == 0
               || strcmp(array[0], "td") == 0
               || strcmp(array[0], "pre") == 0
               || strcmp(array[0], "code") == 0) {
        if (array[2] == NULL) {
            return concat4("<", array[0], array[1], ">");
        } /*else {
							if (strcmp(array[2], "") == 0
									|| strcmp(array[2], ".") == 0
									|| strcmp(array[2], " ") == 0) {
									return concat4("<", array[0], array[1], ">", "</");
							}
						}*/
    } else {
        return "else";
    };
}

char* readLine() {
    FILE * fp;
    char * line = NULL;
    size_t len = 0;
    ssize_t read;
    fp = fopen("index.aml", "r");
    if (fp == NULL)
        exit(EXIT_FAILURE);
    while ((read = getline(&line, &len, fp)) != -1) {
        //printf("Retrieved line of length %zu:\n", read);
        printf("%s", parse(line));
    }
    fclose(fp);
    if (line)
        free(line);
    exit(EXIT_SUCCESS);
}

int main(void) {
    readLine();
}
