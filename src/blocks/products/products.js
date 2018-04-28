document.addEventListener('DOMContentLoaded', function(){

  var cardsWrapper = document.querySelector('.products__cards-wrapper');
  cardsWrapper.addEventListener('click', listener, true);

    function listener(e) {
      var t = e.target;
      if (t === cardsWrapper) return;
      var cards = cardsWrapper.querySelectorAll('.card');
      for (var i = 0; i < cards.length; i++){
        if (cards[i].contains(t)) {
          var card = cards[i];
          var cardInner = card.firstElementChild;
        }
      }
      if (cardInner.contains(t)) toggleState(cardInner, card, true);
      if (t.tagName === 'I') toggleState(cardInner, card);
    }

    function toggleState(cardInner, card, removeHoverable) {
      var state = card.getAttribute('state');
      if (state === 'disabled') return;
      var bottomText = card.querySelectorAll('.card__bottom-text');
      if (state === 'enabled') {
        card.setAttribute('state', 'selected');
        bottomText[1].removeAttribute('hidden');
        bottomText[0].setAttribute('hidden', 'hidden');
      } else {
        card.setAttribute('state', 'enabled');
        bottomText[0].removeAttribute('hidden');
        bottomText[1].setAttribute('hidden', 'hidden');
      }
      if (removeHoverable === true) {
        card.classList.remove('hoverable');
        cardInner.addEventListener('mouseleave', addClassHoverable);
      } 
    }

    function addClassHoverable(e) {
      var t = e.target;
      t.parentNode.classList.add('hoverable');
      t.removeEventListener('mouseleave', addClassHoverable);
    }

});