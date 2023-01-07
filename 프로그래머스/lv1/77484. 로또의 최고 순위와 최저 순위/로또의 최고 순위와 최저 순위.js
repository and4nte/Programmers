function solution(lottos, win_nums) {
    let zeros = 0;
    const lottosWithoutZero = [];
    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] !== 0) {
            lottosWithoutZero.push(lottos[i]);
            continue;
        }
        zeros++;
    }
    
    const myset = new Set([...lottosWithoutZero, ...win_nums]);
    const corrects = lottos.length * 2 - zeros - myset.size;
    
    const best = zeros + corrects > 1 ? 7 - (zeros + corrects) : 6;
    const worst =  corrects > 1 ? 7 - corrects : 6;
    return [best, worst];
}