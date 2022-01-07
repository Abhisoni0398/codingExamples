const firstDuplicate = (arr) => {
    var duplicates = [];
    for(var i = 0;i<arr.length; i++){
        for(var j = i+1; j<arr.length; j++){
            if(arr[i]==arr[j]){
                console.log(i)
                duplicates.push(i);
            }
        }
    }
console.log(duplicates);
}
var a = firstDuplicate([1,9,3,2,3,2,4,5,1]);
console.log(a);
