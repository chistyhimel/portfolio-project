particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

document.addEventListener("DOMContentLoaded", () => {
  // Heading animation
  gsap.from("#about-heading", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "power4.out",
  });

  // Text animation
  gsap.from("#about-text", {
    duration: 1.5,
    x: -100,
    opacity: 0,
    delay: 0.5,
    ease: "power4.out",
  });

  // Image animation
  gsap.from("#about-image", {
    duration: 1.5,
    scale: 0.5,
    opacity: 0,
    delay: 1,
    ease: "elastic.out(1, 0.5)",
  });

  // Scroll-triggered animation for repeated engagement
  gsap.utils
    .toArray("#about-heading, #about-text, #about-image")
    .forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%", // Start animation when element is in view
          toggleActions: "play none none reverse", // Animation replay on reverse
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power4.out",
      });
    });
});
