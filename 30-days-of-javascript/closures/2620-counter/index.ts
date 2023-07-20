// function createCounter(n: number): () => number {
//   return function () {
//     return n++;
//   };
// }

// or

function createCounter(n: number): () => number {
  return () => n++;
}

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
