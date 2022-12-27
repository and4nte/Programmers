function solution(babbling) {
    const wordsSet = new Set(["aya", "ye", "ma", "woo"]);
    let words = 0;

    for (let i = 0; i < babbling.length; i++) {
        let stack = '';
        let prevStack = '';
        let isSpeakable = false;

        for (let k = 0; k < babbling[i].length; k+=2) {
            stack = babbling[i][k] + babbling[i][k+1];
            isSpeakable = wordsSet.has(stack) || wordsSet.has(stack += babbling[i][k+2]);
            if (!isSpeakable || !(isSpeakable = stack !== prevStack)) break;
            
            k = stack.length !== 3 ? k : k + 1;
            prevStack = stack;
            stack = '';
        }
        if (isSpeakable) words++;
    }

    return words;
}