type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  if (n === 0) {
    return arr;
  }

  let flattened = [];

  arr.forEach((element) => {
    if (n > 0 && Array.isArray(element)) {
      flattened.push(...flat(element, n - 1));
    } else {
      flattened.push(element);
    }
  });

  return flattened;
};
