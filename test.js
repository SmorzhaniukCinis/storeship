const arrs= [122, 1232, 32, 142, 44, 4, 1, 3, 546, 1324, 23423, 43, 23, 54]
const arr = [12, 11]


function sortFunk(arr) {
    if(arr.length < 2) {
      return arr
    }
    if(arr[1] < arr[0]){
        let more = arr[1]
        arr[1] = arr[0]
        arr[0] = more
        return arr
    }if(arr.length > 2) {
        let less = arr.filter(item => item < arr[0] )
        let more = arr.filter(item => item > arr[0] )
        return sortFunk(less).concat(arr[0]).concat(sortFunk(more))
    }

}



console.log(sortFunk(arrs))

function sortFunks(arr) {
    if(arr.length > 1) {

    } else if(arr.length === 1) {
        return arr[0]
    }
    return null
}