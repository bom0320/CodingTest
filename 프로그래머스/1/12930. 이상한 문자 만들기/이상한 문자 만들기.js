function solution(s) {
  const arr = s.split(" ").map((v) => v.split(""));
  for(let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0) arr[i][j] = arr[i][j].toUpperCase();
      else arr[i][j] = arr[i][j].toLowerCase();
    }
  }
    
  return arr.map((v) => v.join("")).join(" ");
}
