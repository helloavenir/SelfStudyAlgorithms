function search(arr, num) {
  // 최소 인덱스와 최대 인덱스
  let min = 0
  let max = arr.length - 1
  
  while(min <= max) {
    // 두 인덱스의 중간 인덱스
    let middle = Math.floor((min + max) / 2)   
    // 중간 요소가 비교하는 수보다 작으면 
    if(arr[middle] < num) {
      // 중간값에서 하나 옆 오른쪽으로 이동한 값을 최소 인덱스로 잡음(오른쪽 탐색)
      min = middle + 1
    }
    // 중간 요소가 비교하는 수보다 크면 
    else if(arr[middle] > num) {
      // 중간값에서 하나 옆 왼쪽으로 이동한 값을 최대 인덱스로 잡음(왼쪽 탐색)
      max = middle - 1
    }
    // 중간 요소와 비교하는 수가 같으면 중간 인덱스 반환하면 됨
    else return middle
  }
  return -1
}

search([1, 2, 3, 4, 5, 6], 1)  
search([1, 2, 3, 4, 5, 6], 4)  
search([1, 2, 3, 4, 5, 6], 7)   
