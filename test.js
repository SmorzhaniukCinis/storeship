const arr = [12, 1232, 32, 142, 56, 1]


function maxF(arr, max) {
    let x = max || arr.shift()
    if (x < arr[0]) {
        return maxF(arr, arr.shift())
    } else if(x > arr[0]) {
        arr.shift()
        return maxF(arr, x)
    } else return x
}



maxF(arr)
