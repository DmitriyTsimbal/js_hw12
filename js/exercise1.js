import {getFilledArrayWithRandomNumbers} from "./random-array.js";
//Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.

const RANDOM_ARRAY = getFilledArrayWithRandomNumbers(30, 30, 1, 100000);

const getCocktailSorting = (userArray) => {
    let leftIndex = 0, rightIndex = userArray.length, swapped = true, changesCounter = 0, iterCounter = 0;

    while (swapped) {
        iterCounter++
        swapped = false;
        for (let idx = leftIndex; idx < rightIndex; idx++) {
            iterCounter++
            if (userArray[idx] > userArray[idx + 1]) {
                let temp = userArray[idx];
                userArray[idx] = userArray[idx + 1];
                userArray[idx + 1] = temp;
                changesCounter++
                swapped = true;
            }
        }
        rightIndex--
        if (!swapped)
            break;
        swapped = false;
        for (let idx = rightIndex - 1; idx > leftIndex; idx--) {
            iterCounter++
            if (userArray[idx - 1] > userArray[idx]) {
                let temp = userArray[idx];
                userArray[idx] = userArray[idx - 1];
                userArray[idx - 1] = temp;
                changesCounter++
                swapped = true;
            }
        }
        leftIndex++
    }
    return [changesCounter,iterCounter];
}

const [CHANGES_COUNT, ITERATIONS_COUNT] = getCocktailSorting(RANDOM_ARRAY)

const CHANGES_COUNT_SECTION = document.querySelector('.array-section__changes');
CHANGES_COUNT_SECTION.innerHTML += `Changes count: ${ CHANGES_COUNT }`;
const ITERATIONS_COUNT_SECTION = document.querySelector('.array-section__counter');
ITERATIONS_COUNT_SECTION.innerHTML += `Iterations count: ${ ITERATIONS_COUNT }`;