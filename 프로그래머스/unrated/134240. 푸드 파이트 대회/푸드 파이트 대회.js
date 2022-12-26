function solution(food) {
    // food[0]: 항상 1 (물)
    // food[n]: 준비된 n번째 음식 개수
    //   사용할 n번째 음식 개수 = Math.floor(food[n] / 2)
    //   food[n] === 1 ? continue : Math.floor(food[n] / 2)
    let left = "";
    let right = "";

    for (let i = 1; i < food.length; i++) {
        if (food[i] === 1) continue;

        for (let j = 0; j < Math.floor(food[i] / 2); j++) {
            left += i;
            right = i + right;
        }
    }
    return left + 0 + right;
}