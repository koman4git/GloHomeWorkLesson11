'use strict';

const inputTypeText = document.getElementById('text');
const btn = document.getElementById('btn');
const circleBtn = document.getElementById('e_btn');
const inputTypeRange = document.getElementById('range');
const circle = document.getElementById('circle');




// 1 пункт
const changeColor = function () {
  btn.style.backgroundColor = inputTypeText.value;
};
btn.addEventListener('click', changeColor);

// 2 пункт
const hideCircleBtn = function () {
  circleBtn.style.display = 'none';
};
circleBtn.addEventListener('click', hideCircleBtn);

// 3 пункт
const circleChanger = function () {
  circle.style.width = inputTypeRange.value + '%';
  circle.style.height = inputTypeRange.value + '%';
} 
inputTypeRange.addEventListener('change', circleChanger);
  




