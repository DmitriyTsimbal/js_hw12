import {getFilledArrayWithRandomNumbers} from "./random-array.js";
//Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.

const RANDOM_ARRAY = getFilledArrayWithRandomNumbers(30, 30, 1, 100000);

const getInsertSorting = (userArray) => {
  let changesCounter = 0;
  let iterCounter = 0;
  for (let i = 0; i < userArray.length; i++){
      iterCounter++
      const currentEl = userArray[i];
      let k = i - 1;
      while (k >= 0 && userArray[k] > currentEl){
          iterCounter++
          userArray[k + 1] = userArray[k];
          k--;
          changesCounter++
      }
    userArray[k + 1] = currentEl;
  }
  return [changesCounter, iterCounter];
}

const [ CHANGES_COUNT, ITERATIONS_COUNT ] = getInsertSorting(RANDOM_ARRAY)

const CHANGES_COUNT_SECTION = document.querySelector('.array-section__changes');
CHANGES_COUNT_SECTION.innerHTML += `Changes count: ${ CHANGES_COUNT }`;
const ITERATIONS_COUNT_SECTION = document.querySelector('.array-section__counter');
ITERATIONS_COUNT_SECTION.innerHTML += `Iterations count: ${ ITERATIONS_COUNT }`;