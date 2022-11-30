function sameFrequency(num1, num2) {
  let str1 = num1.toString()
  let str2 = num2.toString()
  
  if(str1.length !== str2.length) {
    return false
  }
  const lookup = {}
  
  for(let i = 0; i < str2.length; i+= 1) {
    let digitNum = str1[i]
    lookup[digitNum] ? lookup[digitNum] +=1 : lookup[digitNum] = 1
  }
  for(let i = 0; i < str2.length; i += 1) {
    let digitNum = str2[i]
    if(!lookup[digitNum]) return false
    else lookup[digitNum] -= 1 
  }
  return true  
}

sameFrequency(297, 729)
sameFrequency(100, 10)
sameFrequency(78787, 88777)
sameFrequency(3290, 9021)
