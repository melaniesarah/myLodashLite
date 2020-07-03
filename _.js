const _ = {
    clamp(number, lowerBound, upperBound) {
        const upperClampedValue = Math.min(number, upperBound);
        const value = Math.max(upperClampedValue, lowerBound);

        return value;
    },
    inRange(number, start = 0, end) {
        if (!end) {
            end = start;
            start = 0;
        }
        const rangeStart = Math.min(start, end);
        const rangeEnd = Math.max(start, end);

        if (number >= rangeStart && number < rangeEnd) {
            return true;
        }

        return false;
    },
    words(string) {
        return string.split(" ");
    },
    pad(string, length) {
        if (string.length > length) return string;

        const totalPadding = length - string.length;
        const beginningPadding = Math.floor(totalPadding / 2);
        const endingPadding = totalPadding - beginningPadding;
        const paddedString = ' '.repeat(beginningPadding) + string + ' '.repeat(endingPadding);

        return paddedString;
    },
    has(obj, key) {
        if (key in obj) return true;
        return false;
    },
    invert(obj) {
        const keys = Object.keys(obj);
        const values = Object.values(obj);
        const invertedObject = {};

        values.forEach((value, index) => {
            invertedObject[value] = keys[index];
        })
        
        return invertedObject;
    },
    findKey(obj, func) {
        for (const [key, value] of Object.entries(obj)) {
            if (func(value)) return key;
        }
        return undefined;
    },
    drop(array, dropNum) {
        if (!dropNum) dropNum = 1;

        return array.slice(dropNum);
    },
    dropWhile(array, predicate) {
        const dropNum = array.findIndex((val, index) => {
            return !predicate(val, index, array);
        });
        return array.slice(dropNum);
    },
    chunk(array, size = 1) {
        if (size > array.length) return [array];

        const arrays = [];
        let i = 0;
        do {
            const arrayChunk = array.slice(i, i + size);
            arrays.push(arrayChunk);
            i += size;  
        } while (array.length - i >= size);

        if (array.length - i !== 0) {
            const arrayChunk = array.slice(i);
            arrays.push(arrayChunk);
        }

        return arrays;
    }
};




// Do not write or modify code below this line.
module.exports = _;