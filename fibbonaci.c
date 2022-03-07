#include <stdio.h>

#define AMOUNT 30

int main() {
    unsigned long long a=1, b=1;
    printf("0");
    for (int i = 0; i < AMOUNT-1; ++i) {
        printf("%d ", a);
        unsigned long long c = a;
        a = b;
        b += c;
    }
    return 0;
}
