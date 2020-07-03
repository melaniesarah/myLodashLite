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
    }
};




// Do not write or modify code below this line.
module.exports = _;