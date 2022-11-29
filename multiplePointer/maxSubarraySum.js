
function maxSubarraySum(arr, num) {
  // 최종적으로는 최대 부분합을 담을 maxSum
  let maxSum = 0
  // 부분합을 담을 tmpSum
  let tmpSum = 0
  // 합계를 내야하는 개수보다 배열의 크기가 작으면 null 반환
  if(arr.length < num) return null
  // 주어진 개수만큼 왼쪽 인덱스의 루프를 돌며 맨 처음 부분합을 만들어 줌
  for(let lt = 0; lt < num; lt += 1) {
    // 첫 부분합을 우선 최대 부분합으로 한다.
    maxSum += arr[lt]
  }
  // 첫 (최대)부분합을 임시 부분합에도 할당해 준 뒤,
  tmpSum = maxSum
  // 첫 창을 한 칸만 오른쪽으로 이동(현재 lt는 제로베이스드 인덱스)
  // 첫 창 요소들을 제외한 오른쪽 요소들을 순차적으로 반복
  for(let rt = num; rt < arr.length; rt += 1) {
    // 새로운 오른쪽 요소를 하나 더하고 기존의 맨 왼쪽 요소를 하나 빼주면 새로운 창의 합이 됨
    tmpSum = tmpSum - arr[rt - num] + arr[rt]
    // 기존 창과 새 창을 비교해 합이 더 큰 걸 결과에 담음
    maxSum = Math.max(maxSum, tmpSum)
  }
  return maxSum
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3 )
