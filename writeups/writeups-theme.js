// Matrix Rain Effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
let w = window.innerWidth;
let h = window.innerHeight;
canvas.width = w;
canvas.height = h;
let cols = Math.floor(w / 18);
let ypos = Array(cols).fill(0);

function matrix() {
  ctx.fillStyle = "#0a0a12cc";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#00f0ff";
  ctx.font = "16px Fira Mono, monospace";
  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(0x30A0 + Math.random() * 96);
    ctx.fillText(text, ind * 18, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 18;
  });
}
setInterval(matrix, 50);
window.addEventListener('resize', () => {
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
  cols = Math.floor(w / 18);
  ypos = Array(cols).fill(0);
});

// Nano Navbar Dropdowns (hover + keyboard)
document.querySelectorAll('.nano-dropdown').forEach(dd => {
  dd.addEventListener('mouseenter', function () {
    document.querySelectorAll('.nano-dropdown').forEach(d => d !== dd && d.classList.remove('active'));
    dd.classList.add('active');
  });
  dd.addEventListener('mouseleave', function () {
    dd.classList.remove('active');
  });
  dd.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      dd.classList.toggle('active');
    }
  });
});
document.body.addEventListener('click', () => {
  document.querySelectorAll('.nano-dropdown').forEach(d => d.classList.remove('active'));
});

// Side Panel Dropdowns
document.querySelectorAll('.side-panel-link').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.side-panel-link').forEach(l => {
      if(l !== link) l.classList.remove('open');
    });
    link.classList.toggle('open');
  });
});