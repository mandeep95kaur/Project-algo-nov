//insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushToFront(arr, val) {
  console.log("Before Push Value at Front in array", arr);
  for (var i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = val;
  console.log("After Push value at Front in array", arr);
}
pushToFront([1, 3, 5], 0);

//remove and return the value at the beginning of the array.
console.log(
  "-----------------------------------------------------------------------"
);
function popFront(arr) {
  console.log("Before remove the front elemenet from array", arr);
  var removeVal = arr[0];
  for (var i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr.pop();
  console.log("Removing value", removeVal);
  console.log("After remove the front elemenet from array", arr);
}

popFront([1, 3, 5, 7]);
console.log(
  "-----------------------------------------------------------------------"
);
//insert the value into array at given index.
function insertAt(arr, val, index) {
  console.log("array before insertion", arr);
  console.log("index where we done insertion and value ", index, ",", val);
  for (var i = arr.length - 1; i >= index; i--) {
    arr[i + 1] = arr[i];
  }
  arr[index] = val;
  console.log("Array after insertion", arr);
}

insertAt([1, 5, 7], 3, 1);
console.log(
  "-----------------------------------------------------------------------"
);
//remove and return the array value at that index
function removeAt(arr, ind) {
  console.log("Array without remove element", arr);
  console.log("index where the val remove", ind);
  if (ind >= arr.length || ind < 0) {
    return null;
  }
  var removeVal = arr[ind];
  for (var i = ind + 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr.pop();
  console.log("Array after remove element from paticular index", arr);
}

removeAt([1, 3, 5, 7], 1);
console.log(
  "-----------------------------------------------------------------------"
);

//Swap positions of successive pairs of values of given array. If length is odd, do not change the final element
function swapPairs(arr) {
  console.log("Array before swap pair", arr);
  for (var i = 0; i < arr.length - 1; i += 2) {
    var temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  console.log("Array after swap pair", arr);
}
swapPairs([1, 2, 3, 4]);
swapPairs(["Brendan", true, 42]);
