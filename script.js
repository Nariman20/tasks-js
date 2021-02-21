function arrayPlusArray(arr1, arr2) {
    let arrAll = [...arr1, ...arr2];
    let arrSum = 0;
    for(let i = 0; i < arrAll.length; i++){
      arrSum += arrAll[i];
    } return arrSum
  }

arrayPlusArray([1, 2, 3], [4, 5, 6])