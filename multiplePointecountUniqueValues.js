function countUniqueValues(arr){
  // 입력값이 빈 배열일 경우를 생각하여,
  if(arr.length === 0) return 0
  let left = 0
  for(let right = 1; right < arr.length; right += 1) {
    // arr[left]와 arr[right]가 같으면 아무 조건 실행작업없이 right +1 증가하고,
    // 같지 않다면 새로운 고유값 발견이므로
    if(arr[left] !== arr[right]) {
      // 왼쪽 인덱스를 하나 오른쪽 이동한 뒤
      left += 1
      // 그 곳에 새 고유값을 넣어 고유값만으로 이루어진 배열을 앞 쪽에 작성해주는 의도
      arr[left] = arr[right]
    }  
  }
  // 고유값들만을 작성한 배열 앞쪽 부분의 마지막 인덱스에 +1을 하면 고유값 개수!
  return left + 1
}

countUniqueValues([-3, -2, 0, 3, 3, 5, 6, 7, 7, 10])
countUniqueValues([ ])
