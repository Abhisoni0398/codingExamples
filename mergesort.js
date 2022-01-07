const mergeSort = (arr) => {
    if (arr.length === 1) {
        return arr;
      }
    var mid = Math.floor(arr.length/2);
    var left = arr.slice(0,mid);
    var right = arr.slice(mid);
   // console.log(right);
    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}
const merge = (left,right) => {
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
   // console.log(right.slice(rightIndex))
}
console.log(mergeSort([3,2,8,7,1,4,9,5,6]));
