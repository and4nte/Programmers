function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        answer += (Math.floor(Math.sqrt(i)) ** 2 !== i) ? i : -i;
    }
    return answer;
}