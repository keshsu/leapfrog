var fruits= [
    {id: 1, name:'Banana', color:'yellow'},
    {id: 1, name:'apple', color:'red'},
    {id: 1, name:'mango', color:'green'},
    {id: 1, name:'orange', color:'orange'}];

var flength = fruits.length;
function searchByName(obj, fruitname){
    for(var i = 0; i<flength; i++){
        if(obj[i].name==fruitname){
            console.log(obj[i]);
        }
    }
}




// var res = fruits.find(searchByName);
// console.log(res);
// function searchByName(fruits, fname) { 
//     return fruits.name === fname;
// }


searchByName(fruits, 'orange');