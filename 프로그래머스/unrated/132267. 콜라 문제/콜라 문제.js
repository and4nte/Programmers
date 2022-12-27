function solution(a, b, n) {
    let iHave = n;
    let count = 0;

    while (iHave >= a) {
        let bottlesFromMe = Math.floor(iHave / a) * a;
        let cokesFromMart = bottlesFromMe * b / a;
        count += cokesFromMart;

        iHave = iHave - bottlesFromMe + cokesFromMart;
    }

    return count;
}