function main() {
  // Create an array

  var array = []; //Global variable

  function handleCreateArray() {
    var inputElement = document.querySelector("#num");
    var result = document.querySelector(".result-array");
    if (!inputElement || !result) return;

    array.push(Number(inputElement.value));

    result.textContent = "[" + array.join(",") + "]";

    inputElement.focus();
  }

  function createArray() {
    var btnElement = document.querySelector(".btn-array");
    if (!btnElement) return;

    btnElement.addEventListener("click", handleCreateArray);
  }

  // Bt 1 : Tính tổng số dương

  function handleTotalValue() {
    var result = document.querySelector(".result-bt-1");

    var total = 0;
    if (!result) return;

    var ARRAY_LENGTH = array.length;

    for (var i = 0; i < ARRAY_LENGTH; i++) {
      if (array[i] > 0) total += array[i];
    }

    result.textContent = "Tổng các số dương: " + total;
  }

  function totalValueArray() {
    var btnElement = document.querySelector(".btn-bt-1");
    if (!btnElement) return;

    btnElement.addEventListener("click", handleTotalValue);
  }

  // BT 2: Đếm số dương

  function handleCountPositiveNumber() {
    var result = document.querySelector(".result-bt-2");
    if (!result) return;

    var ARRAY_LENGTH = array.length;

    var count = 0;

    for (var i = 0; i < ARRAY_LENGTH; i++) {
      if (array[i] > 0) count++;
    }

    result.textContent = "Số dương: " + count;
  }

  function countPositiveNumber() {
    var btnElement = document.querySelector(".btn-bt-2");
    if (!btnElement) return;

    btnElement.addEventListener("click", handleCountPositiveNumber);
  }

  // BT 3 : Tìm số nhỏ nhất

  function handleFindMinimumNumber() {
    var result = document.querySelector(".result-bt-3");

    if (!result) return;

    var minValue = array[0];

    for (var i = 0; i < array.length; ++i) {
      if (array[i] < minValue) minValue = array[i];
    }

    result.textContent = "Số nhỏ nhất: " + minValue;
  }

  function findMinimumNumber() {
    var btnElement = document.querySelector(".btn-bt-3");
    if (!btnElement) return;

    btnElement.addEventListener("click", handleFindMinimumNumber);
  }

  // BT 4 : Tìm số dương nhỏ nhất

  function handleFindMinEvenNumber() {
    var result = document.querySelector(".result-bt-4");
    if (!result) return;

    var minValue = array[0];

    for (var i = 0; i < array.length; ++i) {
      if (array[i] > 0 && array[i] < minValue) minValue = array[i];
    }

    result.textContent = "Số dương thấp nhất: " + minValue;
  }

  function findMinEvenNumber() {
    var btnElement = document.querySelector(".btn-bt-4");
    if (!btnElement) return;

    btnElement.addEventListener("click", handleFindMinEvenNumber);
  }

  // BT 5 : Tìm số chẵn cuối cùng

  function handleFindLastEvenNumber() {
    var result = document.querySelector(".result-bt-5");
    var evenArrList = [];
    if (!result) return;

    // Create array only with even number
    for (var i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) evenArrList.push(array[i]);
    }

    result.textContent =
      "Số chẵn cuối cùng: " + evenArrList[evenArrList.length - 1];
  }

  function findLastEvenNumber() {
    var btnElement = document.querySelector(".btn-bt-5");
    if (!btnElement) return;

    btnElement.addEventListener("click", handleFindLastEvenNumber);
  }

  // BT 6 : Đổi chỗ

  function swap(firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
  }

  function handleSwitchPlace() {
    var result = document.querySelector(".result-bt-6");

    var firstIndex = document.querySelector("#firstIndex");
    var secondIndex = document.querySelector("#secondIndex");
    if (!result || !firstIndex || !secondIndex) return;

    var indexFirst = firstIndex.value * 1;
    var indexSecond = secondIndex.value * 1;

    swap(indexFirst, indexSecond);

    result.textContent = "Mảng sau khi đổi: " + "[" + array.join(",") + "]";
  }

  function switchPlace() {
    var btnElement = document.querySelector(".btn-bt-6");
    if (!btnElement) return;

    btnElement.addEventListener("click", handleSwitchPlace);
  }

  // BT 7 : Sắp xếp tăng dần

  function handleSortIncreaseArray() {
    var result = document.querySelector(".result-bt-7");

    if (!result) return;

    for (var i = 0; i < array.length - 1; i++) {
      for (var j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) swap(i, j);
      }
    }

    result.textContent = "Mảng sau khi sắp xếp: " + "[" + array.join(",") + "]";
  }

  function sortArray() {
    var btnElement = document.querySelector(".btn-bt-7");
    if (!btnElement) return;

    btnElement.addEventListener("click", handleSortIncreaseArray);
  }

  // BT 8 : Tìm số nguyên tố đầu tiên

  function isPrimeNumber(n) {
    var count = 0;
    var i = 2;

    while (i <= n) {
      if (n % i === 0) count++;
      i++;
    }

    return count === 1;
  }

  function handleFindPrimeNumber() {
    var result = document.querySelector(".result-bt-8");
    if (!result) return;
    var primeNumber = array[0];

    for (var i = 0; i < array.length; i++) {
      if (isPrimeNumber(array[i])) {
        primeNumber = array[i];
        break;
      }
    }

    result.textContent = primeNumber;
  }

  function findPrimeNumber() {
    var btnElement = document.querySelector(".btn-bt-8");
    if (!btnElement) return;

    btnElement.addEventListener("click", handleFindPrimeNumber);
  }

  // BT 9 : Đếm số nguyên

  var newArr = [];

  function handleNewArr() {
    var inputArr = document.querySelector("#inputArr");
    var resultArr = document.querySelector(".result-bt-9-arr");
    if (!inputArr || !resultArr) return;

    newArr.push(Number(inputArr.value));

    resultArr.textContent = "[" + newArr.join(",") + "]";
  }

  function handleCountIntegerNumber() {
    var result = document.querySelector(".result-bt-9");
    if (!result) return;

    var count = 0;

    for (var i = 0; i < newArr.length; i++) {
      if (Number.isInteger(newArr[i])) count++;
    }

    result.textContent = "Số nguyên:" + count;
  }

  function countIntegerNumber() {
    var btnNewArr = document.querySelector(".btn-arr-bt-9");
    var btnElement = document.querySelector(".btn-bt-9");
    if (!btnNewArr || !btnElement) return;

    // Create new Arr
    btnNewArr.addEventListener("click", handleNewArr);

    btnElement.addEventListener("click", handleCountIntegerNumber);
  }

  // BT 10 : So sánh số lượng số âm và dương

  function handleCompareValue() {
    var result = document.querySelector(".result-bt-10");
    if (!result) return;

    var countPositiveNumber = 0;
    var countNegativeNumber = 0;
    var message = " Số dương > Số âm ";

    for (var i = 0; i < array.length; i++) {
      if (array[i] > 0) countPositiveNumber++;
      else countNegativeNumber++;
    }

    if (countNegativeNumber > countPositiveNumber) message = "Số âm > Số dương";

    result.textContent = message;
  }

  function compareValue() {
    var btnElement = document.querySelector(".btn-bt-10");
    if (!btnElement) return;

    btnElement.addEventListener("click", handleCompareValue);
  }

  createArray();
  totalValueArray();
  countPositiveNumber();
  findMinimumNumber();
  findMinEvenNumber();
  findLastEvenNumber();
  switchPlace();
  sortArray();
  findPrimeNumber();
  countIntegerNumber();
  compareValue();
}

main();
