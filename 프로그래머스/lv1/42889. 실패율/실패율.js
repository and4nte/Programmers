function solution(N, stages) {
    const answer = [];
    let total = [...stages];

    for (let i = 0; i < N; i++) {
        total = i !== 0 ? total.filter((v) => v >= i + 1) : total;
        const failed = total.filter((v) => v === i + 1);
        answer.push([i + 1, failed.length / total.length]);
    }
    
    return answer.sort((a, b) => b[1] - a[1]).map((arr) => arr[0]);
}