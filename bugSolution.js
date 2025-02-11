function foo(a, b) {
  // Use nullish coalescing to provide default values if a or b are null
  a = a ?? 0; 
  b = b ?? 0; 
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null)); // 0
// Alternatively, you can use a more explicit check with the || operator:
function foo2(a,b){
  a = a || 0; 
  b = b || 0;
  return a + b;
}
console.log(foo2(1, 2)); // 3
console.log(foo2(null, 2)); // 2
console.log(foo2(1, null)); // 1
console.log(foo2(null, null)); // 0