function removeDuplicateElement(arr){
    var exists = {},
        outArray= [],
        elm;
    for(var i=0; i< arr.length; i++ ){
        elm = arr[i]
        if(!exists[elm]){
            outArray.push(elm);
            exists[elm]= true;
        }
    }
    console.log(outArray)

};

removeDuplicateElement (arr = [1, 2, 2, 3, 4, 4, 5, 2, 3, 6])