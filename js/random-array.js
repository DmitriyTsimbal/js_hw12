export const getFilledArrayWithRandomNumbers = (minArrayLength, maxArrayLength, minArrayValue, maxArrayValue) => {
    const RANDOM_NUMBERS_ARRAY = new Array(Math.floor(Math.random() * (maxArrayLength-minArrayLength+1))+minArrayLength)
    for (let arrayIndex = 0; arrayIndex < RANDOM_NUMBERS_ARRAY.length; arrayIndex++) {
        RANDOM_NUMBERS_ARRAY[arrayIndex] = Math.floor(Math.random() * (maxArrayValue-minArrayValue+1))+minArrayValue;
    }
    return RANDOM_NUMBERS_ARRAY;
}