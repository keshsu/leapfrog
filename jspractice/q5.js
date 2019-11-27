var arr = [{
    id: 1,
    name: 'John',
   }, {
    id: 2,
    name: 'Mary',
   }, {
    id: 3,
    name: 'Andrew',
   }];
function sortBy(arr,key) {
    var size = arr.length;

    for(var i = 0; i<size-1; i++) {
       for (var j = i+1; j<arr.length; j++) {
          if(arr[i][key] > arr[j][key]) {
             var temp = arr[i];
             arr[i] = arr[j];
             arr[j] = temp;
          }
       }
    }
    console.log(arr);  
    return arr; 
    
}
sortBy(arr, 'name');