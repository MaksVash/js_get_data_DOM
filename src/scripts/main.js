'use strict';

// write your code here
const population = [...document.querySelectorAll('.population')].map(
  (el) => el.textContent,
);

function totalSumOfPopulation(piople) {
  let totalSumPopulation = 0;

  piople.map((el) => {
    totalSumPopulation += Number(el.replace(/,/g, ''));
  });

  return totalSumPopulation;
}

function getAvaragePopulation(piople) {
  let averageSumPopulation = 0;

  piople.map((el) => {
    averageSumPopulation += Number(el.replace(/,/g, ''));
  });

  return Math.floor(averageSumPopulation / piople.length);
}

document.querySelector('.total-population').textContent =
  totalSumOfPopulation(population);

document.querySelector('.average-population').textContent =
  getAvaragePopulation(population);
