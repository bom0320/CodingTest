function solution(n) {
    let arr=[];
    
    for(let i=1;i<=n;i++){
        let m = [];
        
        for(let j=1;j<=n;j++){
            if(i%j==0){
                m.push(j);
            }
            if(m.length >= 3) // 세개 이상이라고 했으니 
            {
                arr.push(i);
                
                break;
            }
        }
    }
    return arr.length;
}