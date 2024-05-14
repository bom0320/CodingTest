function solution(s) {
    let answer = [];
    let string = [];
    
    for(let i=0;i<s.length;i++){
        if(!string.includes(s[i])){
            answer.push(-1);
            string.push(s[i]);
            continue;
        }
        if(string.includes(s[i])) {
            answer.push(string.length - string.lastIndexOf(s[i]));
            string.push(s[i]);
            continue;
        }

    }
    return answer;
}

