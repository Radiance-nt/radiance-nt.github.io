// Firework effect on mouse click using anime.js
// This script creates a fireworks animation wherever the user clicks on the page

// Ensure anime.js is loaded. If using as a module, import it or include via CDN in HTML.

(function() {
  'use strict';

  // Utility: Debounce function to limit how often a function can fire
  function debounce(fn, delay) {
    let timer;
    return function() {
      const context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn.apply(context, args);
      }, delay);
    };
  }

  // Set up the canvas for fireworks
  const canvasEl = document.querySelector('.fireworks');
  if (!canvasEl) return;
  const ctx = canvasEl.getContext('2d');
  let pointerX = 0, pointerY = 0;
  const numberOfParticules = 30;
  const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

  // Update pointer coordinates based on event
  function updateCoords(e) {
    pointerX = (e.clientX || (e.touches && e.touches[0].clientX)) - canvasEl.getBoundingClientRect().left;
    pointerY = (e.clientY || (e.touches && e.touches[0].clientY)) - canvasEl.getBoundingClientRect().top;
  }

  // Set the direction and distance for each particle
  function setParticuleDirection(p) {
    const angle = anime.random(0, 360) * Math.PI / 180;
    const distance = anime.random(50, 180);
    const n = (anime.random(0, 1) ? 1 : -1) * distance;
    return {
      x: p.x + n * Math.cos(angle),
      y: p.y + n * Math.sin(angle)
    };
  }

  // Create a single particle object
  function createParticule(x, y) {
    const p = {
      x: x,
      y: y,
      color: colors[anime.random(0, colors.length - 1)],
      radius: anime.random(16, 32)
    };
    p.endPos = setParticuleDirection(p);
    p.draw = function() {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
      ctx.fillStyle = p.color;
      ctx.fill();
    };
    return p;
  }

  // Render all particles
  function renderParticule(anim) {
    for (let i = 0; i < anim.animatables.length; i++) {
      anim.animatables[i].target.draw();
    }
  }

  // Animate all particles from the click position
  function animateParticules(x, y) {
    const particles = [];
    for (let i = 0; i < numberOfParticules; i++) {
      particles.push(createParticule(x, y));
    }
    anime.timeline().add({
      targets: particles,
      x: function(p) { return p.endPos.x; },
      y: function(p) { return p.endPos.y; },
      radius: 0.1,
      duration: anime.random(1200, 1800),
      easing: 'easeOutExpo',
      update: renderParticule
    });
  }

  // Resize the canvas to always fill the window
  const setCanvasSize = debounce(function() {
    canvasEl.width = 2 * window.innerWidth;
    canvasEl.height = 2 * window.innerHeight;
    canvasEl.style.width = window.innerWidth + 'px';
    canvasEl.style.height = window.innerHeight + 'px';
    ctx.scale(2, 2);
  }, 500);

  // Clear the canvas on every animation frame
  const render = anime({
    duration: Infinity,
    update: function() {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    }
  });

  // Listen for mouse clicks to trigger fireworks
  document.addEventListener('mousedown', function(e) {
    // Ignore clicks on sidebar or images/links
    if (['sidebar', 'toggle-sidebar'].includes(e.target.id) || ['A', 'IMG'].includes(e.target.nodeName)) return;
    render.play();
    updateCoords(e);
    animateParticules(pointerX, pointerY);
  }, false);

  // Initialize canvas size and handle window resize
  setCanvasSize();
  window.addEventListener('resize', setCanvasSize, false);

})(); 