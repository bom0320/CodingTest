function solution(number, limit, power) {
    var answer = 0; // 변수 초기화
    for (let i = 1; i <= number; i++) // 1부터 number 까지 
    {
        let count = 0; // 약수 개수 세기 위한 용도
        for (let j = 1; j * j <= i; j++) // 제곱근 이하 수로 반복 수행
        {
            if (j * j == i) count++; // 약수 개수 세기
            else if (i % j == 0) count += 2; // i 가 j의 배수인지 판별 -> 나머지 0이면 i가 j의 약수 
        }
        if (count > limit) count = power; // count 가 limit 보다 크면 count 를 power 값으로 대체
        answer += count;
    }
    return answer; // answer 값 반환
}