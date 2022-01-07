const frequency = (arr,k) =>{
    var i = 0;
    var result = [];
    for(i = 0;i<arr.length;i++){
        if(arr[i]==k){
            result.push(arr[i]);
        }
    }
    return result.length;
}
var a = frequency([1,1,2,3,1,1],1);
console.log(a);


