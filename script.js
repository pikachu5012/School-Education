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
