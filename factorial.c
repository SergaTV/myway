#include <stdio.h>
// I don't know why am i doing whis but nevermind i just wanna,ok?

#define NUMBER 5
//you can make this in input but i just dont wanna to bruh

unsigned long long factorial(unsigned long long n) {
    if (n == 1) return n;
    else return n*factorial(n-1);
}

int main() {
    printf("%llu", factorial(NUMBER));
    return 0;
}
