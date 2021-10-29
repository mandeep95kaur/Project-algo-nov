// reverse the order of values of the array.
function revArr(arr) {
  console.log("Array before Reverse operation", arr);
  for (var i = 0; i < arr.length / 2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  console.log("Array after Reverse operation", arr);
}
revArr([1, 2, 3, 4]);

console.log(
  "-----------------------------------------------------------------------"
);
//Filter Range. Given arr and values min and max, retain only the array values between min and max.
function filterRange(arr, minVal, maxVal) {
  console.log(
    "Array before Filter range and minimun and maximum values are",
    arr,
    ",",
    minVal,
    ",",
    maxVal
  );
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < minVal || arr[i] > maxVal) {
      for (var k = i + 1; k < arr.length; k++) {
        arr[k - 1] = arr[k];
      }
      arr.length--;
      i--;
    }
  }
  console.log("Array After filter Range are:", arr);
}
filterRange([1, 6, 9, 3], 3, 12);
filterRange([2, 4, 7, 3, 9, 8], 0, 4);
filterRange([1, 3, 7, 10, 6, 3], 6, 9);

console.log(
  "-----------------------------------------------------------------------"
);
//concat the values of array.
function conArr(arr1, arr2) {
  console.log("Array before concat the value ", arr1, ",", arr2);
  var newArr = [];
  var curInd = 0;
  for (var i = 0; i < arr1.length; i++) {
    newArr[curInd] = arr1[i];
    curInd++;
  }
  for (var i = 0; i < arr2.length; i++) {
    newArr[curInd] = arr2[i];
    curInd++;
  }
  console.log("Array after concat the value ", newArr);
}
conArr([1, 2, 3], [4, 5, 6]);
console.log("***********************");
conArr([2, 3], ["b", "c"]);
console.log("***********************");
conArr(["deep", "preet"], ["jit", "meet"]);
