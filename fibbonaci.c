#include <stdio.h>

#define AMOUNT 30

int main() {
    unsigned long long a=1, b=1;
    for (int i = 0; i < AMOUNT; ++i) {
        printf("%d ", a);
        unsigned long long c = a;
        a = b;
        b += c;
    }
    return 0;
}
