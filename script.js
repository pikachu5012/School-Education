let cardContainer = document.querySelector(".card-container");
let cards = document.querySelectorAll(".card");
let offset = 0;

const step = 380; 
const minTranslate = -(cards.length * 350 - cardContainer.offsetWidth/1.25); // max left
const maxTranslate = 0; 

function moveItems(direction) {
  offset += direction * step;

  // Clamp between min and max
  if (offset < minTranslate) offset = minTranslate;
  if (offset > maxTranslate) offset = maxTranslate;

  // Apply translate to all items
  cards.forEach((item) => {
    item.style.transform = `translateX(${offset}px)`;
  });
}

function slider(type) {
  if (type === "right") {
    moveItems(-1);
  }
  if (type === "left") {
    moveItems(1);
  }
}
