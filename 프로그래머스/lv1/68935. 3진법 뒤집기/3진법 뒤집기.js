function solution(n) {
    let tmp = n.toString(3).split('').reverse().join('');
    return parseInt(tmp, 3);
}