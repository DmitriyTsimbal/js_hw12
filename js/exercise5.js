//Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.

const NAMES_ARRAY = [
    'Olivia', 'Liam', 'Emma', 'Noah', 'Ava', 'Elijah', 'Charlotte', 'William',
    'Amelia', 'Sofia', 'Benjamin', 'Evelyn', 'Mia', 'Isabella', 'Alexander',
    'Harper', 'Michael', 'Abigail', 'Daniel', 'Matthew', 'Ella', 'Carter',
    'Madison', 'Jayden', 'Lily', 'Julian'
];

const getInsertNamesLengthSorting = (namesArray) => {
    for (let i = 0; i < namesArray.length; i++) {
        const currentEl = namesArray[i];
        let k = i - 1;
        while (k >= 0 && namesArray[k].length > currentEl.length) {
            namesArray[k + 1] = namesArray[k]
            k--
        }
        namesArray[k + 1] = currentEl;
    }
    return namesArray;
}

const NAMES_SORTED = getInsertNamesLengthSorting(NAMES_ARRAY);

const getIndexOfNameWithLengthUsingBinarySearch = (userNames, nameLen) => {
    let startIdx = 0, endIdx = userNames.length;
    while (startIdx < endIdx) {
        const mid = Math.floor((startIdx + endIdx) / 2);
        if (userNames[mid].length === nameLen) return mid;
        nameLen > userNames[mid].length ? startIdx = mid + 1 : endIdx = mid - 1;
    }
    return -1
}

const GET_NAME_INDEX = getIndexOfNameWithLengthUsingBinarySearch(NAMES_SORTED, 5)

document.write(`<table>
<tr><td>Sorted array: </td><td>${ NAMES_SORTED.join(', ') }</td></tr>
<tr><td>5 symbols name index: </td><td>${ GET_NAME_INDEX }</td></tr>
</table>`)

