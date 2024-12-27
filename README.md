# Type Error in TypeScript Function

This repository demonstrates a common type error in TypeScript. The `add` function is defined to accept two numbers but is called with a number and a string, leading to a type error.

## Bug

The bug lies in the call to the `add` function. The function is defined to expect two numbers, but it receives a number and a string. TypeScript's type system catches this mismatch and throws a type error.

## Solution

The solution is to ensure that the arguments passed to the `add` function are of the correct type. This can be done by either explicitly converting the string to a number or by changing the function definition to accept a string as well. The provided solution demonstrates explicit type conversion using `parseInt()`.