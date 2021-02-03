//first
const spread = (func, args) => func(...args);

console.log(spread((x, y) => x + y, [1, 2]));

//second
const zipWith = (fn, a0, a1) => a0.length > a1.length
    ? a1.map((el, index) => fn(a0[index], el))
    : a0.map((el, index) => fn(el, a1[index]));

console.log(zipWith((a, b) => a + b, [1, 2, 3, 4], [5, 6, 7]));
