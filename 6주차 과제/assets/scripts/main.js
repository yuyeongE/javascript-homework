const planCards = document.querySelectorAll('.plan-card')
console.log(planCards)

planCards.forEach((card) => {
  card.addEventListener('click', () => {
    //1. 전체 카드 선택 해제
    planCards.forEach((otherCard) => {
      otherCard.classList.remove('selected')

      const button = otherCard.querySelector('.plan-selection-button')
      button.setAttribute('aria-pressed', 'false')

      console.log(otherCard)
    })

    //2. 클릭한 카드만 선택
    card.classList.add('selected')

    const selectedButton = card.querySelector('.plan-selection-button')
    selectedButton.setAttribute('aria-pressed', 'true')

    console.log(card.dataset.plan)

    //3. 하단 안내 박스
    
  })
})
