const arr = [12, 1232, 32, 142, 56, 1]


function maxF(arr) {
    let max = arr.shift()
    if(arr[0]) {
        if(arr[0] > max) {
            max = arr.shift()
            maxF(arr)
        } else {
            arr.shift()
            maxF(arr)
        }
    } else return max
}



maxF(arr)
