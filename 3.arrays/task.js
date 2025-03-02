function compareArrays(arr1, arr2) {
  let result = arr1.length == arr2.length && 
                arr1.every((value, index) => value === arr2[index]);

  return result; // boolean
}

function advancedFilter(arr) {
  
  let resultArr = arr.filter(item => item > 0)
                      .filter(item => item % 3 == 0)
                      .map(item => item * 10);

  return resultArr; // array
}
