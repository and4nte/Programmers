function solution(sizes) {
    const swap = (arr) => arr[0] > arr[1] ? arr : [arr[1], arr[0]];
    let [maxWidth, maxHeight] = swap(sizes[0]);
    
    for (let i = 0; i < sizes.length; i++) {
        const [currWidth, currHeight] = swap(sizes[i]);
        maxWidth = maxWidth >= currWidth ? maxWidth : currWidth;
        maxHeight = maxHeight >= currHeight ? maxHeight : currHeight;
    }
    
    return maxWidth * maxHeight;
}