function solution(myString, pat) {
    let answer = "";
    const newString = [];
    for(let i = 0; i < myString.length; i++){
        if(myString[i] === "A"){
            newString.push("B");
        } else{
            newString.push("A");
        }
    }
    answer = newString.join('');
    if(answer.includes(pat) === true){
        return 1;
    } else{
        return 0;
    }
}