function isEmpty(obj: Record<string, any> | any[]): boolean {
  if (Object.keys(obj).length === 0) return true;
  return false;
}

// OR

// function isEmpty(obj: Record<string, any> | any[]): boolean {
//   return Object.keys(obj).length === 0 ? true : false
// };
