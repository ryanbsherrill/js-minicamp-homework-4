/**
 * recursion is another way to iterate and loop
 * can be less expensive
 * can be less code
 * can be difficult to wrap your head around
*/

function nFib(n) {
  if (n < 3) return 1;
  return nFib(n - 2) + nFib(n - 1);
}

// 1, 1, 2, 3, 5, 8, 13, 21
var result = nFib(8);

console.log(result);

/**
 * 8 comes in
 * is 8 less than 3?
 * no
 * ok, return nfib(8 - 2) + nFib(8 - 1)
 * this means = nfib()
*/