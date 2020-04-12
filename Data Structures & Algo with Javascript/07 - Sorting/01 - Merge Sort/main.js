const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
    if (array.length === 1) {
        return array
    }
    // Split Array in into right and left
    let length = array.length;
    let middle = Math.floor(length / 2);

    let left = array.slice(0,middle);
    let right = array.slice(middle,length);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right){
    let leftIndex = 0;
    let rightIndex = 0;
    let resultArray = [];
    while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            resultArray.push(left[leftIndex]);
            leftIndex++;
        }else{
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const answer = mergeSort(numbers);
console.log(answer);