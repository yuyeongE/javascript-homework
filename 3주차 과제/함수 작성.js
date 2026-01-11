// 함수 작성

// 1. 환영 메세지 생성
// VIP 회원 : "🌟 VIP {이름}님, 특별한 혜택이 준비되어 있습니다!"
// 일반 회원 : "안녕하세요, {이름}님! 즐거운 쇼핑 되세요."

function welcomeMessage(memberGrade, name) {
  const message = {
    VIP회원 : '🌟 VIP ' + name + '님, 특별한 혜택이 준비되어 있습니다!',
    일반회원 : '안녕하세요, ' + name + '님! 즐거운 쇼핑 되세요.'
  }

return message [memberGrade]
}

console.log(welcomeMessage('VIP회원', '유영'))
console.log(welcomeMessage('일반회원', '일반회원'))




// 2. 배송비 계산
// 배송비 정책
// - 주문 금액이 50,000원 이상 : 무료 배송
// - 제주/도서 지역 : 추가 배송비 3,000원
// - 배송지역 값 예시 : "서울", "부산", "제주", "도서"
// - 일반 지역 : 기본 배송비 3,000원
// - 주문 금액이 0원 이하인 경우 : 0 반환
// - 배송지역이 빈 문자열인 경우 : 기본 배송비 적용




// 3. 비밀번호 유효성 검사
// 비밀번호 규칙
// - 최소 8자 이상
// - 최대 20자 이하
// - 위 조건을 모두 만족하면 true, 아니면 false 반환




// 4. 포인트 적립 계산
// 포인트 적립률
// - VIP : 결제 금액의 5%
// - GOLD : 결제 금액의 3%
// - SILVER : 결제 금액의 1%
// - 일반 : 결제 금액의 0.5%
// [예] VIP 회원이 100,000원 결제 시 → 5,000 포인트 적립

function calculateRewardPoints(memberGrade, paymentAmount) {
  const pointRate = {
    VIP: 0.05,
    GOLD: 0.03,
    SILVER: 0.01,
    BASIC: 0.005
  }

  // 적립포인트 = 결제 금액 * 포인트 적립률
  const rewardPoints = paymentAmount * pointRate[memberGrade]

  return parseInt(rewardPoints)
}

console.log(calculateRewardPoints('VIP', 100_000))


// 5. 영화 티켓 가격 계산
// 요금 정책
// - 일반 영화: 14,000원
// - 3D 영화: 17,000원
// - IMAX 영화: 20,000원
// - 조조 할인(10시 이전 상영): 20% 할인
// - 영화타입 값 : "일반", "3D", "IMAX"
// - 조조할인여부 값 : true 또는 false
// [예] 3D 영화, 조조 상영, 2명 관람 → 27,200원 결제
