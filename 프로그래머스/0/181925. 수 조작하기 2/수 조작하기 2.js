function solution(numLog) {
    let result = '';
    for (let i =0;i<numLog.length;i++) {
        const char = numLog[i] - numLog[i-1];
        
        if(char === 1) {
            result += 'w';
        } else if (char === -1) {
            result += 's';
        } else if (char === 10) {
            result += 'd';
        } else if (char === -10) {
            result += 'a';
        }
    }
    return result;
}
console.log((solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1])))