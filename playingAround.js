function positiveSum(arr) {
  let sumOfPositive = 0;
  for (let i = 0; i<arr.length; i++) {
    if(arr[i] >=0)
    sumOfPositive += i;
    console.log(arr[i]);
    
  }
  return sumOfPositive;
  
  
  
}

array = [1, 3, -3, 4, 5, 6, 10];
//result: 29;
console.log(positiveSum(array));