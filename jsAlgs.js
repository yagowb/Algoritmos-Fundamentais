const sumNum1Selector = document.getElementById('sum-num1');
const sumNum2Selector = document.getElementById('sum-num2');
const sumResultSelector = document.getElementById('sum-result');
const sumBtn = document.getElementById('sum-btn');

function sum () {
  console.log('---SUM CALLED?---')
  // '1'
  // +'1'
  // 1
  sumResultSelector.value = +sumNum1Selector.value + +sumNum2Selector.value;
}
