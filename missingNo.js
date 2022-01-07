var missingNumber = (arr) => {
    var n = arr.length+1;
    var naturalSum = n*(n+1)/2;
    //console.log(naturalSum)
    var sum = 0;
    for(var i = 0;i<arr.length;i++){
        sum+=arr[i]; 
    }
    //console.log(sum);
    var result = naturalSum-sum;
    console.log(result);
}
missingNumber([1,2,4,6,7,8]);


