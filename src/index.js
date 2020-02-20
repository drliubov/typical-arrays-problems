
exports.min = function min (array) {
  if (!check(array)) return 0;
    let result = array[0];
    for(let i=1; i<array.length; i++){
        if (array[i]<result) result = array[i];
    }
    return result;
}

exports.max = function max (array) {
  if (!check(array)) return 0;
    let result = array[0];
    for(let i=1; i<array.length; i++){
        if (array[i]>result) result = array[i];
    }
    return result;
}

exports.avg = function avg (array) {
  if (!check(array)) return 0;
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum/array.length;
}
 function check(array) {
     return array!=undefined && array.length!=0;
 }
