// 강사님 작성

function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  // 각 수를 각각의 딕셔너리로 각 자리의 수와 그의 빈도를 담는다.
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  // 두 딕셔너리의 키의 값을 비교해 같지 않다면 false 다 같다면 true 반환
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}

sameFrequency(297, 729)  
sameFrequency(100, 10) 
sameFrequency(78787, 88777)
sameFrequency(3290, 9021)  
