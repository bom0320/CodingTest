function solution(food) {
    let result = '';  // 결과를 저장할 문자열

    // food 배열의 각 요소를 순회하며 결과 문자열을 생성
    for (let i = 1; i < food.length; i++) {
        let count = Math.floor(food[i] / 2);  // 현재 음식의 수를 반으로 나눈 몫을 계산
        result += String(i).repeat(count);  // 몫만큼 현재 인덱스를 문자열로 반복 추가
    }

    // 결과 문자열을 중앙에 '0'을 두고, 결과 문자열의 역순을 결합하여 반환
    return result + '0' + result.split('').reverse().join('');
}
