const removeDuplicates = (arr) => {
    var duplicates = [];
    for(var i = 0;i<arr.length;i++){
        var l = false;
        for(var j = i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                l = true;
            }
        }
         if(!l){
        duplicates.push(arr[i]);
    }
   
    }
    console.log(duplicates);
   // console.log(arr);
}
removeDuplicates([1,12,22,1,4,5,6,4,6,2,2,8,8]);