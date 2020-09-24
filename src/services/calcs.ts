export function getAvgTime(numArray: Array<number>) {
    const sum = numArray.reduce((aggregator, currentValue) => aggregator + currentValue);
    return sum / numArray.length;
}