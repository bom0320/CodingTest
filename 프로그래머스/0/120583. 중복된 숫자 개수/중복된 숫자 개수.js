function solution(arr, n){
    let a = 0;
    for (i =0; i < arr.length; i++){
        if(arr[i] === n){
            a++
        }
    }
    return a
}