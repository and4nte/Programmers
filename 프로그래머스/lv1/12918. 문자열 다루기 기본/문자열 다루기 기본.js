function solution(s) {
    return !Number.isNaN(+(s + '.')) && (s.length === 4 || s.length === 6);
}