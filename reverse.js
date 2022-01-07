const reverse = (arr) => {
    var a = [];
    for(var i = arr.length-1;i>=0; i--){
        a.push(arr[i]);
    }
    console.log(a);
}
reverse([1,2,3,4,5,6,7,8,9]);