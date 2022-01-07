// const firstNonDuplicate = (arr) => {
//     for(var i = 0; i <arr.length; i ++){
//         for(var j = 0 ;j<arr.length; j++){
//             if(i!=j && arr[i]==arr[j])
//             break;
//             if(i==j){
//                 return(arr[i])
//             }
//         }
//     }
//     return -1;
// }
// console.log(firstNonDuplicate([1,2,3,6,1,2,3]))
var arr = [-1,15, 2, 5, 6, 2, 9, -1, 6, 5,9, -1, 3,15];
var n = arr.length;
var result;

function nonrep() {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++)
      if (i != j && arr[i] == arr[j]) {
        result = arr[i];
        break;
      }
    if (j == n)
      return arr[i];
  }
  return result;
}
console.log(nonrep())