
exports.min = function min (array) {
    if (array == undefined){
        return 0;
    }
    else if (array.length == 0){
        return 0;
    } else {
        let temp_item = array[0];
        array.forEach(element => {
            if (element < temp_item){
                temp_item = element;
            }
        });
        return temp_item;
    }
}

exports.max = function max (array) {
    let temp_item = 0;
    if (array == undefined){
        return 0;
    }
    else if (array.length == 0){
        return 0;
    } else {
        array.forEach(element => {
            if (element > temp_item){
                temp_item = element;
            }
        });
    }  
    return temp_item;
}

exports.avg = function avg (array) {
    let temp_item = 0;
    if (array == undefined){
        return 0;
    }
    else if (array.length == 0){
        return 0;
    }   else {
        array.forEach(element => {
            temp_item += element; 
         });
    }   
    return temp_item / array.length;
}
