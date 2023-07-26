declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function (fn) {
  const group = {};
  for (let item of this) {
    const key = fn(item);
    group[key] ||= [];
    group[key].push(item);
  }
  return group;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
