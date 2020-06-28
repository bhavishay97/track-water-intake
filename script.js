const smallCups = document.querySelectorAll('.small-cup');
const litres = document.querySelector('.litres');
const percentage = document.querySelector('.percentage');
const remained = document.querySelector('.remained');
const todaysGoalText = document.querySelector('h5');
const resetButton = document.querySelector('.reset-button');

let totalWater = 3;
let percentValue = 0;

smallCups.forEach((cup, index) => {
  cup.addEventListener('click', () => updateBigCup(index));
});

resetButton.addEventListener('click', () => resetLogs());

function updateBigCup(index) {
  const logValue = parseInt(smallCups[index].innerHTML);

  totalWater -= logValue / 1000;
  litres.innerText = totalWater + ' L';

  percentValue += (logValue / 3000) * 100;
  percentage.innerText = percentValue.toFixed(1) + ' %';

  if (percentValue >= 99) {
    litres.innerText = '0 L';
    percentage.innerText = '100 %';
    todaysGoalText.innerText =
      'You have achieved your daily goal. Keep it up !';
  }
}

function resetLogs() {
  totalWater = 3;
  percentValue = 0;
  litres.innerText = '3.00 L';
  percentage.innerText = '0 %';
  todaysGoalText.innerText = `Today's goal is : 3 litres`;
}
