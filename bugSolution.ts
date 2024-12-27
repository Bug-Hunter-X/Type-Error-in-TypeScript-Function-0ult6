function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, parseInt("2", 10)); // Fixed by converting string to number
console.log(result); 