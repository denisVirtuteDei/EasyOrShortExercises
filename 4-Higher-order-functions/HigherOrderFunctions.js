//first
const spread = (func, args) => func(...args);

console.log(spread((x, y) => x + y, [1, 2]));
