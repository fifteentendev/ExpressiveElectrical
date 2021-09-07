((d, w) => {
  let Rellax = require("rellax");
  if (d.querySelector(".rellax")) {
    const options = {
      speed: -3,
      center: true,
      // round: true,
    };

    let rellax = new Rellax(".rellax", options);

    let isSmall = (w) => w.matchMedia("(max-width: 600px)").matches;

    w.addEventListener("resize", () => {
      if (isSmall(w)) {
        rellax.destroy();
      } else {
        rellax.refresh();
      }
    });
    w.addEventListener(
      "load",
      () => {
        if (isSmall(w)) {
          rellax.destroy();
        }
      },
      false
    );
  }
})(document, window);
