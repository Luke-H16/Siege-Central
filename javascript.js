/* Adds and removes the responsive class to nav bar */
function myFunction() {
  var x = document.getElementById("nav-bar");
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const set1 = document.querySelector('.attackers');
  const set2 = document.querySelector('.defenders');

  const btnFirst = document.querySelector('.btn-attackers');
  const btnSecond = document.querySelector('.btn-defenders');
  const btnSwap = document.querySelector('.btn-arrows');

  function fadeIn(element) {
    element.classList.remove('hidden');
    setTimeout(() => {
      element.classList.remove('fade-out-state');
    }, 20); 
  }

  function fadeOut(element) {
    element.classList.add('fade-out-state');
    setTimeout(() => {
      element.classList.add('hidden');
    }, 400); 
  }

  if (set1 && set2 && btnFirst && btnSecond && btnSwap) {
    
    // Show attackers
    btnFirst.addEventListener('click', () => {
      fadeIn(set1);
      fadeOut(set2);
    });

    // Show defenders
    btnSecond.addEventListener('click', () => {
      fadeOut(set1);
      fadeIn(set2);
    });

    // Swap
    btnSwap.addEventListener('click', () => {
      if (set1.classList.contains('hidden')) {
        fadeIn(set1);
        fadeOut(set2);
      } else {
        fadeOut(set1);
        fadeIn(set2);
      }
    });
  }
});
