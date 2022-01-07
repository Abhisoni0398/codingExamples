const sumArr = (arr) =>{
    for(var i = 0;i< arr.length; i++){
        for(var j = i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==0){
                console.log(arr[i],arr[j]);
            }   
        }
    }
   
}
console.log(sumArr([2,-2,-3,4,7,1,5]));
