document.addEventListener('DOMContentLoaded', function() {
 
  var overlay = document.querySelector('.popup-overlay');
  var popups = document.querySelectorAll('.popup, #criar-conta-popup,#sessao-popup');
  var triggers = document.querySelectorAll('.popup-trigger');
  var isPopupActive = false;

  



  function closePopup() {
    popups.forEach(popup => {
      popup.style.display = 'none';
    });
    overlay.style.display = 'none';
    isPopupActive = false;
    document.body.classList.remove('popup-active');
  }

  triggers.forEach(trigger => {
    trigger.addEventListener('click', function(event) {
      event.preventDefault();
      var targetPopupSelector = this.dataset.popup;
      var targetPopup = document.querySelector(targetPopupSelector);
      if (targetPopup) {
        if (isPopupActive) {
          closePopup();
        }
        targetPopup.style.display = 'block';
        overlay.style.display = 'block';
        isPopupActive = true;
        document.body.classList.add('popup-active');
      } else {
        console.error("Popup element not found for selector: ", targetPopupSelector);
      }
    });
  });

  // Close buttons
  popups.forEach(popup => {
    const closeButton = popup.querySelector('.close');
    if (closeButton) {
      closeButton.addEventListener('click', function(event) {
        event.preventDefault();
        closePopup();
      });
    }
  });

  // Cursor Custom
  document.addEventListener('mousemove', function(event) {
    if (isPopupActive && overlay.contains(event.target) && !Array.from(popups).some(popup => popup.contains(event.target))) {
      document.body.style.cursor = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' fill=\'black\' height=\'24\' width=\'24\' viewBox=\'0 0 24 24\'><path d=\'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 13.59L15.59 16 12 12.41 8.41 16 7 14.59 10.59 12 7 9.41 8.41 8 12 10.59 15.59 8 17 9.41 13.41 12 17 14.59z\'/></svg>"), auto';
    } else {
      document.body.style.cursor = 'auto';
    }
  });

  overlay.onclick = closePopup;

// Checkar reviews
const reviews = document.querySelectorAll('.review');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

console.log(leftArrow); // LEFT arrow element -DEBUG
console.log(rightArrow); // RIGHT arrow element -DEBUG

let index = 0;

function showReview() {
    reviews.forEach(review => {
        review.style.opacity = 0;
        review.style.pointerEvents = 'none';
    });

    reviews[index].style.opacity = 1;
    reviews[index].style.pointerEvents = 'auto';
}

function showPreviousReview() {
    index = (index === 0) ? reviews.length - 1 : index - 1;
    showReview();
}

function showNextReview() {
    index = (index === reviews.length - 1) ? 0 : index + 1;
    showReview();
}

leftArrow.addEventListener('click', function() {
    showPreviousReview();
});

rightArrow.addEventListener('click', function() {
    console.log("Right arrow clicked"); 
    showNextReview();
});

showReview(); // review inicial
setInterval(showNextReview, 5000); // Auto slide 

document.querySelector('.hamburger-menu').addEventListener('click', () => {
  document.querySelector('.navbar').classList.toggle('show');
  document.body.classList.toggle('menu-open');
});
document.querySelector('.close-menu').addEventListener('click', () => {
  document.querySelector('.navbar').classList.remove('show');
});


});

