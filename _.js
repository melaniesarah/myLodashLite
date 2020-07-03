const _ = {
    clamp(number, lowerBound, upperBound) {
        const upperClampedValue = Math.min(number, upperBound);
        const value = Math.max(upperClampedValue, lowerBound);
        return value;
    }
};




// Do not write or modify code below this line.
module.exports = _;