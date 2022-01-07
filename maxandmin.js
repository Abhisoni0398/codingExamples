const minAndMax = (arr)=>{
    var max = 0;
    var min = arr[1];
    for(var i = 0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }else if(arr[i]<min){
            min = arr[i];
        }
    }
    // var min = max;
    // for(var i = 0;i<arr.length;i++){
    //     if(arr[i]<min){
    //         min = arr[i];
    //     }
    // }
    console.log(max);
    console.log(min);
}
minAndMax([2,3,1,4,7,5,9,8])