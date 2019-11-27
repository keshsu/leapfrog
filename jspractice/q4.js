
var numbers = [1, 2, 3, 4];

function transform(collection, tranFunc) {
    var x = collection.map(tranFunc);
    return x;
 }

var output = transform(numbers, function(num) {
    return num * 2;
});
console.log(output);