function solution(arr, query) {
    for (i=0;i<query.length;i++) {
        if (i % 2 === 0) {
            arr = arr.slice(0,query[i]+1);    
        }
        else {
            arr = arr.slice(query[i]);
        }
    }
    
    return arr;
}

console.log(solution([0, 1, 2, 3, 4, 5]	,[4, 1, 2]));