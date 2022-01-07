const binary = (arr,k) =>{
    var lower = 0;
    var upper = arr.length-1;
    var mid = 0;
    //console.log(arr[mid])
    while(lower<=upper){
        mid = Math.floor((lower+upper)/2);
    if(arr[mid]===k){
        return arr[mid];
    }else if(arr[mid]>k){
        upper=mid-1;
    }else{
        lower = mid+1;
    }
    

}
return -1;
};
let a = binary([1,2,3,4,5,6,7,8,9],10);
console.log(a)


