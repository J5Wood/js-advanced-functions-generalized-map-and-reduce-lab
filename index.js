function map(arr, func) {
    let newArray = [];
    for ( let i = 0; i < arr.length; i++) {
        newArray.push(func(arr[i]));
    }
    return newArray;
}

function reduce(arr, func, memo ) {
    if (!memo) {
        memo = arr[0];
        arr = arr.slice(1);
    }
    for (let i = 0; i < arr.length; i++) {
        memo = func(arr[i], memo);
    }
    return memo;
    
}

