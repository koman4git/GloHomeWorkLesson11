'use strict';

const inputTypeText = document.getElementById('text');
const square = document.getElementById('square');
const circleBtn = document.getElementById('e_btn');
const inputTypeRange = document.getElementById('range');
const circle = document.getElementById('circle');
const rangeSpan = document.getElementById('range-span');




// 1 пункт
const changeColor = function () {
  square.style.backgroundColor = inputTypeText.value;
};
btn.addEventListener('click', changeColor);

// 2 пункт
const hideCircleBtn = function () {
  circleBtn.style.display = 'none';
};
circleBtn.addEventListener('click', hideCircleBtn);
rangeSpan.textContent = inputTypeRange.value + '%';
// 3 пункт
const circleChanger = function () {
  circle.style.width = inputTypeRange.value + '%';
  circle.style.height = inputTypeRange.value + '%';
  rangeSpan.textContent = inputTypeRange.value + '%';
}; 
inputTypeRange.addEventListener('input', circleChanger);
  




