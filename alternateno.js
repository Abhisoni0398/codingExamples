const alternateNumber = (arr) => {
    var positiveNumber = [];
    var negativeNumber = [];
    var resultArray = [];
    for(var i = 0; i<arr.length; i++){
        if(arr[i]>0){
            positiveNumber.push(arr[i])
        }else{
            negativeNumber.push(arr[i]);
        }
    }
    var j = 0;
    var k = 0;
    var l = 0;

   while(j<positiveNumber.length && k< negativeNumber.length){
    resultArray[l] = positiveNumber[j];
    resultArray[l+1] = negativeNumber[k];
   // console.log(resultArray);
    k++;
    j++;
    l=l+2; 
   };
   while(j<positiveNumber.length){
       resultArray[l] = positiveNumber[j];
       j++;
       l++;
   }
   while(k<negativeNumber.length){
    resultArray[l] = negativeNumber[k];
    k++;
    l++;
}
   console.log(resultArray);
};
var a = alternateNumber([1,2,3,7,6,-7,-1,-5,9,-2,4]);
console.log(a)