function validAnagram(str1, str2){
  if(str1.length !== str2.length) {
      return false
  }
  const lookup = {}
  
  for(let i = 0; i < str1.length; i +=1) {
      // 문자열의 각 문자가 letter라는 lookup 객체의 키 변수에 담김
      let letter = str1[i]
      // 그 키에 값이 있으면 값을 +1하고 아니면 키와 값을 넣음(초기화)
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }
  console.log(lookup)
  for(let i = 0; i < str2.length; i +=1) {
    // 두번째 문자열의 문자가
    let letter = str2[i]
    // 빈도수 카운터에 담겨있지 않으면 false 반환
    if(!lookup[letter]) return false
    // 담겨있으면 갯수를 하나씩 빼서 길이만큼 반복해 모두 0이 되고, 
    // 0이 된 문자를 담겨있는지 다시 묻지 않으면 true 반환하게 됨.
    else lookup[letter] -= 1
  }
  return true
}

validAnagram('anagram','nagaram')
