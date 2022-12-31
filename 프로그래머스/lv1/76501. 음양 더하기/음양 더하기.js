function solution(absolutes, signs) {
    return absolutes.reduce((acc, curr, i) => acc + (signs[i] ? curr : -curr), 0);
}