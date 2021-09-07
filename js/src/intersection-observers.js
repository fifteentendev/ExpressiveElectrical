((d, w) => {
  let applyTransitions = (target) => {
    if (target.classList.contains("fade-in")) {
      target.classList.add("appear");
    }
    if (target.classList.contains("swipe-left")) {
      target.classList.add("position");
    }
    if (target.classList.contains("swipe-right")) {
      target.classList.add("position");
    }
    if (target.classList.contains("swipe-up")) {
      target.classList.add("position");
    }
    if (target.classList.contains("swipe-down")) {
      target.classList.add("position");
    }
  };

  if (!window.IntersectionObserver) {
    console.log("observers not supported");
    const observedContent = d.querySelectorAll("fade");
    observedContent.forEach((elem) => {
      elem.classList.remove("fade");
      if (elem.classList.contains("fade-in")) {
        elem.classList.remove("fade-in");
      }

      if (elem.classList.contains("swipe-left")) {
        elem.classList.remove("swipe-left");
      }

      if (elem.classList.contains("swipe-right")) {
        elem.classList.remove("swipe-right");
      }

      if (elem.classList.contains("swipe-up")) {
        elem.classList.remove("swipe-up");
      }
    });
  }
  if (!!window.IntersectionObserver) {
    const appearOptions = {
      threshold: 0,
      rootMargin: `0px 0px -150px 0px`,
    };

    const appearOnScroll = new IntersectionObserver(
      (entries, appearOnScroll) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            const { target } = entry;

            if (target.classList.contains("fade-stagger")) {
              let { children } = target;
              Array.from(children).forEach((elem) => {
                applyTransitions(elem);
              });

              appearOnScroll.unobserve(target);
              return;
            }
            applyTransitions(target);

            appearOnScroll.unobserve(target);
          }
        });
      },
      appearOptions
    );
    const faders = d.querySelectorAll(".fade, .fade-stagger");
    const staggers = d.querySelectorAll(".fade-stagger");

    staggers.forEach((group) => {
      const duration = 0.25;
      group.querySelectorAll(".fade").forEach((elem, index) => {
        elem.style.transitionDelay = `${duration * index}s`;
      });
    });

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
  }
})(document, window);
