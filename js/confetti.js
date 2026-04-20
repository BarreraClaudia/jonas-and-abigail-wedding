const canvas = document.getElementById('confetti-canvas');
const myConfetti = confetti.create(canvas, { resize: true });

const heart = confetti.shapeFromPath({
  path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z',
  matrix: [
    0.03333333333333333, 0, 0, 0.03333333333333333, -5.566666666666666,
    -5.533333333333333,
  ],
});

function trickle() {
  myConfetti({
    particleCount: 3,
    spread: 80,
    startVelocity: 8 + Math.random() * 6,
    gravity: 0.35,
    drift: Math.random() * 0.8 - 0.4,
    ticks: 450,
    scalar: 0.8 + Math.random() * 1.4,
    shapes: [heart],
    colors: ['#FFF'],
    origin: { x: Math.random(), y: -0.05 },
  });

  setTimeout(trickle, 250 + Math.random() * 450);
}

// Small initial burst so something appears immediately on load
window.onload = () => {
  myConfetti({
    particleCount: 30,
    spread: 140,
    startVelocity: 12,
    gravity: 0.35,
    drift: 0,
    ticks: 450,
    scalar: 1.2,
    shapes: [heart],
    colors: ['#FFF'],
    origin: { x: 0.5, y: -0.05 },
  });

  trickle();
};
