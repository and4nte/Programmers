function solution(s) {
    const words = {
        zer: ['zero', 0], one: ['one', 1], two: ['two', 2], thr: ['three', 3], fou: ['four', 4],
        fiv: ['five', 5], six: ['six', 6], sev: ['seven', 7], eig: ['eight', 8], nin: ['nine', 9]
    };
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        if (Number.isInteger(+s[i])) {
            answer += s[i];
            continue;
        }
        
        const [word, num] = words[s[i] + s[i+1] + s[i+2]];
        answer += num;
        i += word.length - 1;
    }
    
    return +answer;
}