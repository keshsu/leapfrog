function noofStars(stars){
    for (var i=1;i<=stars;i++){
        var content=" ";
        for(var j=stars;j>=i;j--){
        content += "*";
        }
        document.write(content);
        document.write('</br>');
    }
}
noofStars(5);