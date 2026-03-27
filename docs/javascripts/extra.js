/* ============================================
   NEURAL NETWORK CANVAS ANIMATION
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  // Create canvas element
  const canvas = document.createElement('canvas');
  canvas.id = 'neural-canvas';
  document.body.prepend(canvas);

  // Create glow orbs
  const orb1 = document.createElement('div');
  orb1.className = 'orb orb1';
  document.body.prepend(orb1);

  const orb2 = document.createElement('div');
  orb2.className = 'orb orb2';
  document.body.prepend(orb2);

  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // --- NEURAL NETWORK NODES ---
  const NODE_COUNT = 55;
  const MAX_DIST = 180;

  const nodes = Array.from({ length: NODE_COUNT }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    r: Math.random() * 2.2 + 1.2,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.012 + Math.random() * 0.018,
    active: Math.random() < 0.2,
  }));

  // Signals travelling along edges
  const signals = [];
  let signalTimer = 0;

  function spawnSignal() {
    for (let attempt = 0; attempt < 20; attempt++) {
      const a = nodes[Math.floor(Math.random() * nodes.length)];
      const b = nodes[Math.floor(Math.random() * nodes.length)];
      const dx = a.x - b.x, dy = a.y - b.y;
      if (Math.sqrt(dx * dx + dy * dy) < MAX_DIST) {
        signals.push({ from: a, to: b, t: 0, speed: 0.008 + Math.random() * 0.006 });
        break;
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move nodes
    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      n.pulse += n.pulseSpeed;
      if (n.x < 0) { n.x = 0; n.vx *= -1; }
      if (n.x > canvas.width) { n.x = canvas.width; n.vx *= -1; }
      if (n.y < 0) { n.y = 0; n.vy *= -1; }
      if (n.y > canvas.height) { n.y = canvas.height; n.vy *= -1; }
    });

    // Draw edges
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const fade = 1 - dist / MAX_DIST;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(0,160,220,${0.09 * fade})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }

    // Spawn & draw signals
    signalTimer++;
    if (signalTimer > 40) { spawnSignal(); signalTimer = 0; }

    for (let i = signals.length - 1; i >= 0; i--) {
      const s = signals[i];
      s.t += s.speed;
      if (s.t >= 1) { signals.splice(i, 1); continue; }

      const sx = s.from.x + (s.to.x - s.from.x) * s.t;
      const sy = s.from.y + (s.to.y - s.from.y) * s.t;

      // Trail
      const trailLen = 0.12;
      const t0 = Math.max(0, s.t - trailLen);
      const tx = s.from.x + (s.to.x - s.from.x) * t0;
      const ty = s.from.y + (s.to.y - s.from.y) * t0;
      const grad = ctx.createLinearGradient(tx, ty, sx, sy);
      grad.addColorStop(0, 'rgba(0,220,255,0)');
      grad.addColorStop(1, 'rgba(0,220,255,0.7)');
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(sx, sy);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Head dot
      ctx.beginPath();
      ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,240,255,0.85)';
      ctx.fill();

      // Glow around head
      const glowGrad = ctx.createRadialGradient(sx, sy, 0, sx, sy, 10);
      glowGrad.addColorStop(0, 'rgba(0,220,255,0.25)');
      glowGrad.addColorStop(1, 'rgba(0,220,255,0)');
      ctx.beginPath();
      ctx.arc(sx, sy, 10, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();
    }

    // Draw nodes
    nodes.forEach(n => {
      const pulseFactor = 0.7 + 0.3 * Math.sin(n.pulse);
      const alpha = n.active ? 0.85 * pulseFactor : 0.35 * pulseFactor;
      const radius = n.active ? n.r * 1.8 : n.r;

      // Outer glow for active nodes
      if (n.active) {
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, radius * 5);
        glow.addColorStop(0, `rgba(0,220,255,${0.18 * pulseFactor})`);
        glow.addColorStop(1, 'rgba(0,220,255,0)');
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius * 5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      }

      // Node core
      ctx.beginPath();
      ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,210,255,${alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);

  /* ============================================
     SKILL BARS ANIMATION ON SCROLL
     ============================================ */

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-item').forEach(item => {
          const bar = item.querySelector('.skill-bar');
          if (bar) {
            setTimeout(() => {
              bar.style.width = item.dataset.level + '%';
            }, 100);
          }
        });
      }
    });
  }, { threshold: 0.3 });

  const skillsSections = document.querySelectorAll('.skills-grid');
  skillsSections.forEach(section => observer.observe(section.parentElement));

  /* ============================================
     SMOOTH SCROLL FOR ANCHOR LINKS
     ============================================ */

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ============================================
     FADE IN ELEMENTS ON SCROLL
     ============================================ */

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  // Apply fade-in to project cards
  setTimeout(() => {
    document.querySelectorAll('.project-card, .admonition').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      fadeObserver.observe(el);
    });
  }, 100);
});
