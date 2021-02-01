console.log((function sumAverage(arr) {
    const sum = (prev, val) => prev + val;
    let result = Math.floor(arr
        .map(massive => massive.reduce(sum) / massive.length)
        .reduce(sum));
    return result;
})([
    [44, 76, 12],
    [96, 12, 34, 53, 76, 34, 56, 86, 21],
    [34, 65, 34, 76, 34, 87, 34]
]) === 148)

console.log((function maxTriSum(numbers) {
    const [f, s, t, ...other] = [...new Set(numbers)]
        .sort((l, r) => r - l);
    return f + s + t;
})([-13, -50, 57, 13, 67, -13, 57, 108, 67]) === 232)

console.log((function biggest(nums) {

    function mySort(a, b) {
        const ab = a + b;
        const ba = b + a;
        return ab > ba ? -1 : 1;
    }

    const mass = nums.map(String).sort(mySort);
    if ([...new Set(mass)].toString() === '0')
        return '0'
    return mass.join('');
})())

console.log((function pattern(n) {
    if (n <= 0) return '';

    let output = Array.from({ length: n }, (_, x) =>
        [...Array.from({ length: n - x }, (_, i) => 1 + x + i),
        ...Array.from({ length: x }, (_, last) => last + 1)].join('')
    ).join('\n');

    return output;
})())

console.log((function ArithmeticSequenceSum(a, r, n) {
    return Array.from({ length: n }, (_, x) => a + r * x).reduce((prev, val) => prev + val);
})())

console.log(function diagonalMatrixSum(arr) {
    return arr.map((item, index) => item[index]).reduce((prev, val) => prev + val);
})([
    [5, 9, 1, 0],
    [8, 7, 2, 3],
    [1, 4, 1, 9],
    [2, 3, 8, 2],
])
