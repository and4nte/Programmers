function solution(arr, divisor) {
    const filtered = arr.filter((v) => !(v % divisor));
    return filtered.length > 0 ? filtered.sort((a, b) => a - b) : [-1];
}