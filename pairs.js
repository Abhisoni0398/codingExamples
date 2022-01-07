const pairs = (arr) => {
    var k = 7;
    for(var i = 0; i<arr.length; i++){
        for(var j = i+1; j<arr.length; j++){
            if(i!==j){
                if(arr[i]+arr[j]==k){
                    console.log(arr[i],arr[j])
                }
            }
        }
    }
}
pairs([1,2,3,4,5]);