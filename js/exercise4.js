//Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.


const NAMES_ARRAY = ["Alex", "Ryan", "Sophia", "John", "Emily", "Daniel", "Jessica", "Carlos", "Maria", "Benjamin", "Gina", "Olga", "David", "Katie", "Julia", "Nicole", "Brandon", "Elena", "Leo", "Hannah", "Max", "Victoria", "Mike", "Lena", "Chris", "Bella", "Marco", "Rachel", "Andrew", "Gabriella"];

const bubbleSortingUserNames = (userNames) => {
    let changed;
    do {
        changed = false;
        for (let i = 0; i < userNames.length; i++) {
            if (userNames[i - 1] > userNames[i]) {
                let tmp = userNames[i - 1];
                userNames[i - 1] = userNames[i];
                userNames[i] = tmp;
                changed = true;
            }
        }
    } while (changed)
    return userNames;
}

const NAMES_SORTED = bubbleSortingUserNames(NAMES_ARRAY)

const binarySearchName = (userNames, searchName) => {
    let startIdx = 0, endIdx = userNames.length;
    while (startIdx < endIdx) {
        const mid = Math.floor((startIdx + endIdx) / 2)
        if (userNames[mid] === searchName) return mid;
        (userNames[mid] < searchName) ? startIdx = mid + 1 : endIdx = mid - 1
    }
return -1
}

const GET_NAME_INDEX = binarySearchName(NAMES_SORTED,'Olga')

document.write(`<table>
<tr><td>Sorted array: </td><td>${ NAMES_SORTED.join(', ') }</td></tr>
<tr><td>Olga index: </td><td>${ GET_NAME_INDEX }</td></tr>
</table>`)