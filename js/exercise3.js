import {getFilledArrayWithRandomNumbers} from "./random-array.js";
//Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.
//Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран.

const RANDOM_ARRAY_FOR_BUBBLE_SORTING = getFilledArrayWithRandomNumbers(5, 5, 1, 100000);
const RANDOM_ARRAY_FOR_COCKTAIL_SORTING = getFilledArrayWithRandomNumbers(5, 5, 1, 100000);
const RANDOM_ARRAY_FOR_INSERT_SORTING = getFilledArrayWithRandomNumbers(5, 5, 1, 100000);


const getBubbleSorting = (userArray) => {
    let changed;
    const GET_SECTION = document.querySelector('.sorting-section__bubble')
    do {
        changed = false;
        for (let i = 0; i < userArray.length; i++) {
            if (userArray[i - 1] > userArray[i]) {
                let tmp = userArray[i - 1];
                userArray[i - 1] = userArray[i];
                userArray[i] = tmp;
                changed = true;
                let tr = document.createElement('tr')
                let td = document.createElement('td')
                td.innerText = `${ userArray }`
                tr.appendChild(td)
                GET_SECTION.appendChild(tr)
            }
        }
    } while (changed)
    return userArray
}

const getCocktailSorting = (userArray) => {
    let leftIndex = 0, rightIndex = userArray.length, swapped = true
    const GET_SECTION = document.querySelector('.sorting-section__cocktail')
    while (swapped) {
        swapped = false;
        for (let idx = leftIndex; idx < rightIndex; idx++) {
            if (userArray[idx] > userArray[idx + 1]) {
                let tmp = userArray[idx];
                userArray[idx] = userArray[idx + 1];
                userArray[idx + 1] = tmp;
                swapped = true;
                let tr = document.createElement('tr')
                let td = document.createElement('td')
                td.innerText = `${ userArray }`
                tr.appendChild(td)
                GET_SECTION.appendChild(tr)
            }
        }
        rightIndex--
        if (!swapped)
            break;
        swapped = false;
        for (let idx = rightIndex - 1; idx > leftIndex; idx--) {
            if (userArray[idx - 1] > userArray[idx]) {
                let tmp = userArray[idx];
                userArray[idx] = userArray[idx - 1];
                userArray[idx - 1] = tmp;
                swapped = true;
                let tr = document.createElement('tr')
                let td = document.createElement('td')
                td.innerText = `${ userArray }`
                tr.appendChild(td)
                GET_SECTION.appendChild(tr)
            }
        }
        leftIndex++
    }
    return userArray;
}

const getInsertSorting = (userArray) => {
    const GET_SECTION = document.querySelector('.sorting-section__insert')
    for (let i = 0; i < userArray.length; i++) {
        const currentEl = userArray[i];
        let k = i - 1;
        while (k >= 0 && userArray[k] > currentEl) {
            userArray[k + 1] = userArray[k];
            k--
        }
        userArray[k + 1] = currentEl
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerText = `${ userArray }`
        tr.appendChild(td)
        GET_SECTION.appendChild(tr)
    }
    return userArray;
}

getBubbleSorting(RANDOM_ARRAY_FOR_BUBBLE_SORTING)

getCocktailSorting(RANDOM_ARRAY_FOR_COCKTAIL_SORTING)

getInsertSorting(RANDOM_ARRAY_FOR_INSERT_SORTING)
