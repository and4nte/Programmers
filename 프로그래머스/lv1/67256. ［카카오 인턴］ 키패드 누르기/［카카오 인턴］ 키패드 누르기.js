function solution(numbers, hand) {
    const numpad = [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'];
    let leftIndex = 9; // *
    let rightIndex = 11; // #
    let answer = '';
    
    const getDistance = (currIdx, tgIdx) => {
        const currentY = Math.floor((12 - (currIdx+1)) / 3);
        const targetY = Math.floor((12 - (tgIdx+1)) / 3);
        const y = Math.abs(currentY - targetY);

        const currentX = currIdx + (3 * currentY - 9);
        const targetX = tgIdx + (3 * targetY - 9);
        const x = Math.abs(currentX - targetX);
        
        return x + y;
    }
    
    for (let i = 0; i < numbers.length; i++) {
        const targetIndex = numpad.indexOf(numbers[i]);
        
        if ([0, 3, 6].includes(targetIndex)) {
            answer += 'L';
            leftIndex = targetIndex;
            continue;
        } else if ([2, 5, 8].includes(targetIndex)) {
            answer += 'R';
            rightIndex = targetIndex;
            continue;
        }
        
        const distLeftToTarget = getDistance(leftIndex, targetIndex);
        const distRightToTarget = getDistance(rightIndex, targetIndex);
        
        if (distLeftToTarget > distRightToTarget) {
            answer += 'R';
            rightIndex = targetIndex;
            continue;
        } else if (distLeftToTarget < distRightToTarget) {
            answer += 'L';
            leftIndex = targetIndex;
            continue;
        }
        
        answer += hand[0].toUpperCase();
        if (hand === 'left') leftIndex = targetIndex;
        else rightIndex = targetIndex;
    }
    
    return answer;
}