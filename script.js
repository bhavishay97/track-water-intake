const smallCups = document.querySelectorAll('.small-cup');
const litres = document.querySelector('.litres');
const percentage = document.querySelector('.percentage');
const remained = document.querySelector('.remained');
const todaysGoalText = document.querySelector('h5');

let totalWater = 3;
let percentValue = 0;

smallCups.forEach((cup, index) => {
  cup.addEventListener('click', () => updateBigCup(index));
});

function updateBigCup(index) {
  const logValue = parseInt(smallCups[index].innerHTML);

  totalWater -= logValue / 1000;
  litres.innerText = totalWater + ' L';

  percentValue += (logValue / 3000) * 100;
  percentage.innerText = percentValue.toFixed(1) + ' %';
}
