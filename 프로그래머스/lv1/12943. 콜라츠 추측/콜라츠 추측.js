function solution(num) {
    if (num === 1) return 0;
    
    let count = 0;
    let result = num;
    
    while(1) {
        count++;
        result = result % 2 ? result * 3 + 1 : result / 2;
        console.log(result)
        if (result === 1 || count > 500) break;
    }

    return count > 500 ? -1 : count;
}