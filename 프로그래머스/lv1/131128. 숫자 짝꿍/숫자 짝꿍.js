function solution(X, Y) {
    const map = new Map();
    let answer = '';

    for (let i = 0; i < X.length; i++) {
        map.set(X[i], (map.get(X[i]) || 0) + 1);
    }

    for (let i = 0; i < Y.length; i++) {
        const countFromMap = map.get(Y[i]);
        if (!countFromMap) continue;

        answer += Y[i];
        countFromMap - 1 !== 0 ? map.set(Y[i], countFromMap - 1) : map.delete(Y[i]);
    }
    
    if (answer === '') return '-1';
    return +answer !== 0 ? answer.split('').sort((a, b) => b - a).join('') : '0';
}