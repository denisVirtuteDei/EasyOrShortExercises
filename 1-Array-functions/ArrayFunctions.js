//1.1
function sumAverage(arr) {
    const sum = (prev, val) => prev + val;
    let result = Math.floor(arr
        .map(massive => massive.reduce(sum) / massive.length)
        .reduce(sum));
    return result;
}
console.log(sumAverage([[44, 76, 12], [96, 12, 56, 86, 21], [34, 65, 76, 34, 87, 34]]) === 148)

//1.2
function maxTriSum(numbers) {
    const [first, second, third, ...other] = [...new Set(numbers)].sort((l, r) => r - l);
    return first + second + third;
}
console.log(maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67]) === 232)

//1.3
function biggest(nums) {

    function numbCompare(a, b) {
        const ab = a + b;
        const ba = b + a;
        return ab > ba ? -1 : 1;
    }

    const sortingList = nums.map(String).sort(numbCompare);

    return [...new Set(sortingList)].toString() === '0' ? '0' : sortingList.join('')
}
console.log(biggest([3, 30, 34, 5, 9]))

//1.4
function pattern(numb) {
    if (numb <= 0) return '';

    return Array
        .from({ length: numb }, (_, elCount) =>
            [
                ...Array.from({ length: numb - elCount }, (_, i) => 1 + elCount + i),
                ...Array.from({ length: elCount }, (_, last) => last + 1)
            ].join(''))
        .join('\n');
}
console.log(pattern(5))

//1.5
function arithmeticSequenceSum(a, r, n) {
    return Array
        .from({ length: n }, (_, x) => a + r * x)
        .reduce((prev, val) => prev + val);
}
console.log(arithmeticSequenceSum(2, 3, 5))

//1.6
function diagonalMatrixSum(arr) {
    return arr
        .map((item, index) => item[index])
        .reduce((prev, val) => prev + val);
}
console.log(diagonalMatrixSum(
    [
        [5, 9, 1, 0],
        [8, 7, 2, 3],
        [1, 4, 1, 9],
        [2, 3, 8, 2],
    ])
)
