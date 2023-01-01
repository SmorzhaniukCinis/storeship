const arrs= [12, 1232, 32, 142, 56, 1]
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
    }

}



console.log(sortFunk(arr))

function sortFunks(arr) {
    if(arr.length > 1) {

    } else if(arr.length === 1) {
        return arr[0]
    }
    return null
}