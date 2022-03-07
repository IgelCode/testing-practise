const analyzeArray = (array) => {
  const min = () => {
    let a = 9999999999;
    for (i = 0; i < array.length; i++) {
      if (array[i] < a) {
        a = array[i];
      }
    }
    return a;
  };

  const max = () => {
    let b = -99999999;
    for (i = 0; i < array.length; i++) {
      if (array[i] > b) {
        b = array[i];
      }
    }
    return b;
  };

  const avg = () => {
    let c = 0;
    for (i = 0; i < array.length; i++) {
      c += array[i];
    }
    let result = c / array.length;
    return result;
  };

  const length = () => {
    let d = array.length;
    return d;
  };

  const analyzedArray = {
    min: min(),
    max: max(),
    average: avg(),
    length: length(),
  };
  return analyzedArray;
};

module.exports = analyzeArray;
