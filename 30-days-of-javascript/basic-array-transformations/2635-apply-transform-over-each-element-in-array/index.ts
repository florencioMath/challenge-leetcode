// function map(arr: number[], fn: (n: number, i: number) => number): number[] {
//   return arr.map(fn);
// }

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
}
