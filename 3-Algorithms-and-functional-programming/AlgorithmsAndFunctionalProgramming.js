
//3.5
function reducer(arr, callback, initValue) {
    function red(arr, callback, result, index) {
        if(index+1 < arr.length)
            return red(arr, callback, callback(result, arr[index]), index+1)
        return callback(result, arr[index])
    }
    return initValue 
        ? red(arr, callback, callback(initValue, arr[0]), 1) 
        : red(arr, callback, callback(arr[0], arr[1]), 2)
};
