function solution(my_string, n) {
    // slice를 이용, 문자열 길이에서 'n'을 뺀 값부터 문자열 길이를 매개변수로 줄 경우 문자열 뒤부터 n글자로 이뤄진 문자열을 반환한다.
    return my_string.slice(my_string.length-n,my_string.length);
}