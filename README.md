<!-- Assignment 1 -->
1. Arithmetic Operators: +, -, /, *, %, **, ++, --
2. Assignment Operators: =
3. Comparison Operators: >, <, <=, >=, ==, ===, !==, !=
4. Logical Operators: ||, &&, !, ??
5. Bitwise Operators: &, |, ^, ~, <<, >>, >>>

<!--Assignment 2-->
1. Arithmetic Operators:
    - let a = 5; b = 10;
        a + b = 15;
        a * b = 50;
    - ++a = 6;
2. Assignment Operators:
    - let a = 30;
    - a = 35;
3. Comparison Operators
    - if (a > 20) {
        result "Happy"
    } else {
        result "Sad"
    }

    - if (a != 20) {
        result "Go away"
    } else {
        result "Stay"
    }
4. Logical Operators
    - if (number === 30 || number === 47) {
        console.log("You got it right!")
    } else {
        console.log("You got it wrong!")
    }

    - if (number == 30 && number === 47) {
        console.log("You got it right!")
    } else {
        console.log("You got it wrong!")
    }
5. Bitwise Operators:
    - let a = 5;

    // 5:     00000000000000000000000000000101
    // 2:     00000000000000000000000000000010

    a &= 2; //0

    - let a = 5;      // 00000000000000000000000000000101
        a |= 3;         // 00000000000000000000000000000011

        // Expected output: 7

<!-- Assignment 4 -->
for (let i = 1; i < 20; i += 7) {
    console.log(i)
}

Output = 1, 8, 15

