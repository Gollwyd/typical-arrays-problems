
exports.min = function min (array) {
    try {
      let a =  array.length;
    } catch (error) {
        return 0;
    }
    let num = 0;
    for (let i=0; i < array.length; i++) {
        if (array[i] < num) num = array[i];
    }
  return num;
}

exports.max = function max (array) {
    try {
        let a =  array.length;
      } catch (error) {
          return 0;
      }
    let num = 0;
    for (let i=0; i < array.length; i++) {
        if (array[i] > num) num = array[i];
    }
  return num;
}

exports.avg = function avg (array) {
    try {
        let a =  array[1];
      } catch (error) {
          return 0;
      }
    let b = array.length;
    if (b==0) b = 1;
    let sum = 0;
    array.forEach(element => {
        sum+=element;
    });
  return sum/b;
}
