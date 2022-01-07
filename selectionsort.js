const sort = (arr) => {
    var i = 0;
    var temp = 0;
   for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp = arr[i];
            arr[i]=arr[j];
            arr[j] = temp;
        }
    }
   }
   return arr;
}
var num = [9,8,7,6,5,4,3,2,1]; 
sort(num);
console.log(num);
