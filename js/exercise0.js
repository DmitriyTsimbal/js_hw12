import {getFilledArrayWithRandomNumbers} from "./random-array.js";
//Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою

const RANDOM_ARRAY = getFilledArrayWithRandomNumbers(30, 30, 1, 100000);

const getBubbleSorting = (userArray) => {
    let changed;
    let changesCounter = 0;
    let iterCounter = 0;

    do {
        iterCounter++
        changed = false;
        for (let i = 0; i < userArray.length; i++) {
            iterCounter++
            if (userArray[i - 1] > userArray[i]) {
                let tmp = userArray[i - 1];
                userArray[i - 1] = userArray[i];
                userArray[i] = tmp;
                changed = true;
                changesCounter++
            }
        }
    } while (changed)
    return [changesCounter,iterCounter];
}

const [CHANGES_COUNT, ITERATIONS_COUNT] = getBubbleSorting(RANDOM_ARRAY)


const CHANGES_COUNT_SECTION = document.querySelector('.array-section__changes');
CHANGES_COUNT_SECTION.innerHTML += `Changes count: ${ CHANGES_COUNT }`;
const ITERATIONS_COUNT_SECTION = document.querySelector('.array-section__counter');
ITERATIONS_COUNT_SECTION.innerHTML += `Iterations count: ${ ITERATIONS_COUNT }`;