function solution(ingredient) {
    const stack = [];
    let burgers = 0;

    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);

        if (stack[stack.length - 1] !== 1) continue;
        if (stack[stack.length - 2] !== 3) continue;
        if (stack[stack.length - 3] !== 2) continue;
        if (stack[stack.length - 4] !== 1) continue;

        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        burgers++;
    }

    return burgers;
}