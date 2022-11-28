function sumZero(arr) {
 // 맨 왼쪽 요소 인덱스
 let left = 0
 // 맨 오른쪽 요소 인덱스
 let right = arr.length - 1
 while(left < right) {
   let sum = arr[left] + arr[right]
   if(sum === 0) return [arr[left], arr[right]]
   // 두 요소의 합이 0보다 크면 양수 쪽인 오른쪽 인덱스를 왼쪽으로 한 칸 이동한다.
   else if(sum > 0) right -= 1
   // 두 요소의 합이 0보다 작으면 음수 쪽인 왼쪽 인덱스를 오른쪽으로 한 칸 이동한다.
   else left += 1
 }
}
  
sumZero([-4, -3, -2, -1, 0, 1, 2, 5])
