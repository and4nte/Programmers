function solution(price, money, count) {
    const result = count * (count + 1) / 2 * price - money;
    return result > 0 ? result : 0;
}