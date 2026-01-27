const container = document.getElementById('confetti-container');
const canvas = document.getElementById('confetti-canvas');
const myConfetti = confetti.create(canvas, { resize: true });

const heart = confetti.shapeFromPath({
  path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z',
  matrix: [
    0.03333333333333333, 0, 0, 0.03333333333333333, -5.566666666666666,
    -5.533333333333333,
  ],
});

function launchLeft() {
  myConfetti({
    particleCount: 50,
    spread: 55,
    angle: 60,
    origin: { x: 0, y: 1 },
    shapes: [heart],
    colors: ['#FFF'],
    scalar: 2,
  });
}

function launchRight() {
  myConfetti({
    particleCount: 50,
    spread: 55,
    angle: 120,
    origin: { x: 1, y: 1 },
    shapes: [heart],
    colors: ['#FFF'],
    scalar: 2,
  });
}

function launchConfetti() {
  launchLeft();
  launchRight();
}

setInterval(launchConfetti, 5000);

window.onload = launchConfetti;
