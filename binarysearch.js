function binarySearch(arr, target){
    let leftIndex = 0
    let rightIndex = arr.length -1
    while(leftIndex <= rightIndex)
    {
        let middleIndex = Math.floor((leftIndex + rightIndex) /2)
        let middleValue = arr[middleIndex]

        if (middleValue < target)
        {
            leftIndex = middleIndex + 1
        }
        else if (middleValue > target)
        {
            rightIndex = middleIndex - 1
        }
        else{
            return middleIndex
        }
    }

    return -1

    // const middleIndex = Math.floor((arr.length-1) / 2)

    // if (arr[middleIndex] === target){
    //     return middleIndex
    // }
    // else if(arr[middleIndex] > target){

    // }
    // else
    // {

    // }
    // console.log(middleIndex)
}