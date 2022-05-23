function handleMouseEnter() {
  console.log('handle mouse enter called', this);
}

function addEventListenersToCard() {
  const CARD_ELEMENTS = document.getElementsByClassName('s-card');
  
  for (let i = 0; i < CARD_ELEMENTS.length; i++) {
    const CARD = CARD_ELEMENTS[i];
    CARD.addEventListener('mouseenter', handleMouseEnter);
  }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCard, false);

/*1:20 */