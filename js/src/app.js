((d, w) => {
  const clickables = d.querySelectorAll(".clickable");

  clickables.forEach((item) => {
    let target = item.querySelector("a");

    item.addEventListener("click", (e) => {
      // e.preventDefault();
      target.click();
    });
  });
})(document, window);
