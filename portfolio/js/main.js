document.querySelectorAll(".filtre a").forEach(function (a, index) {
  a.addEventListener("click", function (event) {
    document.querySelectorAll(".filtre a").forEach(function (sibling, index) {
      sibling.classList.remove("active");
    });

    a.classList.add("active");

    document.querySelectorAll(".mosaique_web li").forEach(function (li, index) {
      li.classList.remove("inactive");
      if (
        a.getAttribute("target") != "*" &&
        !li.classList.contains(a.getAttribute("target"))
      ) {
        li.classList.add("inactive");
      }
    });
  });
});
