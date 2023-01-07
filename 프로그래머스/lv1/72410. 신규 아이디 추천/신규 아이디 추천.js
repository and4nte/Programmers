function solution(new_id) {
    let answer = new_id
        .toLowerCase()
        .replace(/[^\w\-\.]/g, '')
        .replace(/\.+/g, '.')
        .replace(/^\.|\.$/g, '')
        .replace(/^$/, 'a')
        .match(/^.{1,15}/g)[0].replace(/\.$/g, '');

    if (answer.length < 3) {
        const lastChar = answer[answer.length - 1];
        while(answer.length < 3) {
            answer += lastChar;
        }
    }
    
    return answer;
}