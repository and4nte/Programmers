function solution(survey, choices) {
    const types = ["RT", "CF", "JM", "AN"];
    const map = new Map();

    for (let i = 0; i < survey.length; i++) {
        if (choices[i] === 4) continue;
        const key = choices[i] < 4 ? survey[i][0] : survey[i][1];
        map.set(key, (map.get(key) || 0) + Math.abs(choices[i] - 4));
    }

    return types.reduce((acc, curr) => {
        const left = map.get(curr[0]) || 0;
        const right = map.get(curr[1]) || 0;
        return acc + (left < right ? curr[1] : curr[0]);
    }, '');
}