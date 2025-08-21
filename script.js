function expand(divId) {
  if (document.getElementById(divId).style.display === "block") {
    document.getElementById(divId).style.display = "none";

    document.getElementsByClassName(divId)[0].classList.remove("selected");

    document.getElementsByClassName(divId)[0].classList.add("not-selected");

    $(`.quest button[value="${divId}"]`).html("");

    $(`.quest button[value="${divId}"]`).html(
      '<i class="fa-solid fa-plus"></i>'
    );
  } else {
    document.getElementById(divId).style.display = "block";

    document.getElementsByClassName(divId)[0].classList.remove("not-selected");

    document.getElementsByClassName(divId)[0].classList.add("selected");

    $(`.quest button[value="${divId}"]`).html("");

    $(`.quest button[value="${divId}"]`).html(
      '<i class="fa-solid fa-minus"></i>'
    );
    for (let i = 1; i <= 8; i++) {
      if (i === Number(divId[divId.length - 1])) continue;

      document.getElementById(`Q${i}`).style.display = "none";

      document.getElementsByClassName(`Q${i}`)[0].classList.remove("selected");

      document.getElementsByClassName(`Q${i}`)[0].classList.add("not-selected");

      $(`.quest button[value="Q${i}"]`).html("");

      $(`.quest button[value="Q${i}"]`).html(
        '<i class="fa-solid fa-plus"></i>'
      );
    }
  }
}

// pop up on the nav
let popup = document.getElementById("popup");
let overlay = document.getElementById("overlay");
function openPopup() {
    popup.classList.add("open-popup");
    overlay.classList.add("active"); 
}
function closePopup() {
    popup.classList.remove("open-popup");
    overlay.classList.remove("active"); 
}

overlay.addEventListener("click", function() {
    closePopup();
});


//the counter in the header section
function animateCounter(id, start, end, duration) {
    let obj = document.getElementById(id);
    let current = start;
    let range = end - start;
    let increment = Math.ceil(range / 100);
    let steps = range / increment;
    let stepTime = Math.max(Math.floor(duration / steps), 1);
    let timer = setInterval(function() {
    current += increment;
    if (current >= end) {
        current = end;
        clearInterval(timer);
    }
    obj.textContent = current.toLocaleString();
    }, stepTime);
}

window.onload = function() {
    animateCounter("counter1", 1, 7000, 1500);
    animateCounter("counter2", 1, 37, 1500);
    animateCounter("counter3", 1, 15, 1500);
};