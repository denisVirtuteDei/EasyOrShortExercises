//3.1
function flattenAndSort(array) {
    return array.length > 0
        ? array.reduce((prev, val) => prev.concat(val), []).sort((l, r) => l - r)
        : [];
}

//3.2
function add(n) {
    return x => x + n
}

//3.3
const multiplyAll = arr => n => arr.map(el => el * n)

//3.4
function uniqueSum(lst) {
    if (lst.length === 0) return null;
    return [...new Set(lst)].reduce((prev, val) => prev + val)
}

//3.5
function reducer(arr, callback, initValue) {
    function red(arr, callback, result, index) {
        if (index + 1 < arr.length)
            return red(arr, callback, callback(result, arr[index]), index + 1)
        return callback(result, arr[index])
    }
    return initValue
        ? red(arr, callback, callback(initValue, arr[0]), 1)
        : red(arr, callback, callback(arr[0], arr[1]), 2)
};

//3.6
function compose(...args) {
    return numb => arguments.length > 0 
      ? args.reduceRight((prev, val) => val(prev), numb) 
      : numb
  }
