/* =========================================================
   cubes.js — 버튼에 마우스를 올리면 작은 3D 큐브들이 커서 쪽으로 기울어짐
   Vue Bits "Cubes" 를 버튼 크기로 줄여 프레임워크 없이 옮긴 것
   (gsap 대신 CSS transition, 클릭하면 물결처럼 큐브가 빛남)
   ========================================================= */
(() => {
  const OPTIONS = {
    cubeSize: 12,       // 큐브 한 칸 크기(px)
    maxAngle: 45,
    radius: 2.2,        // 기울어지는 범위(칸)
    enter: 0.3,
    leave: 0.6,
    rippleSpeed: 2,
  };
  const EASE = 'cubic-bezier(0.215, 0.61, 0.355, 1)'; // power3.out
  const FACES = [
    'translateY(-50%) rotateX(90deg)',
    'translateY(50%) rotateX(-90deg)',
    'translateX(-50%) rotateY(-90deg)',
    'translateX(50%) rotateY(90deg)',
    'rotateY(-90deg) translateX(50%) rotateY(90deg)',
    'rotateY(90deg) translateX(-50%) rotateY(-90deg)',
  ];
  const touchOnly = matchMedia('(hover: none)').matches;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function build(btn) {
    const cols = Math.max(4, Math.ceil(btn.offsetWidth / OPTIONS.cubeSize));
    const rows = Math.max(2, Math.ceil(btn.offsetHeight / OPTIONS.cubeSize));
    const scene = document.createElement('span');
    scene.className = 'cubes';
    scene.setAttribute('aria-hidden', 'true');
    scene.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    scene.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    const html = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        html.push(`<span class="cube" data-r="${r}" data-c="${c}">${FACES.map((t) => `<i style="transform:${t}"></i>`).join('')}</span>`);
      }
    }
    scene.innerHTML = html.join('');
    btn.prepend(scene);
    return { scene, cols, rows, cubes: [...scene.children] };
  }

  function tilt(state, row, col) {
    state.cubes.forEach((cube) => {
      const dist = Math.hypot(+cube.dataset.r - row, +cube.dataset.c - col);
      if (dist <= OPTIONS.radius) {
        const a = (1 - dist / OPTIONS.radius) * OPTIONS.maxAngle;
        cube.style.transition = `transform ${OPTIONS.enter}s ${EASE}`;
        cube.style.transform = `rotateX(${-a}deg) rotateY(${a}deg)`;
      } else {
        cube.style.transition = `transform ${OPTIONS.leave}s ${EASE}`;
        cube.style.transform = 'rotateX(0deg) rotateY(0deg)';
      }
    });
  }

  function ripple(state, row, col) {
    const step = 0.15 / OPTIONS.rippleSpeed;
    const hold = (0.3 + 0.6) / OPTIONS.rippleSpeed;
    state.cubes.forEach((cube) => {
      const ring = Math.round(Math.hypot(+cube.dataset.r - row, +cube.dataset.c - col));
      setTimeout(() => {
        cube.classList.add('lit');
        setTimeout(() => cube.classList.remove('lit'), hold * 1000);
      }, ring * step * 1000);
    });
  }

  function attach(btn) {
    if (btn.dataset.cubes) return;
    btn.dataset.cubes = '1';
    btn.classList.add('has-cubes');
    let state = null;
    let raf = 0;
    const cell = (e) => {
      const rect = btn.getBoundingClientRect();
      return [
        ((e.clientY - rect.top) / rect.height) * state.rows,
        ((e.clientX - rect.left) / rect.width) * state.cols,
      ];
    };
    btn.addEventListener('pointerenter', () => {
      if (!state) state = build(btn);
    });
    btn.addEventListener('pointermove', (e) => {
      if (!state) state = build(btn);
      const [r, c] = cell(e);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => tilt(state, r, c));
    });
    btn.addEventListener('pointerleave', () => {
      if (state) tilt(state, -99, -99);
    });
    btn.addEventListener('pointerdown', (e) => {
      if (!state) state = build(btn);
      const [r, c] = cell(e);
      ripple(state, Math.floor(r), Math.floor(c));
    });
  }

  window.attachCubes = () => {
    if (touchOnly || still) return;
    document.querySelectorAll('.btn, .tb-gh, .copy').forEach(attach);
    // 나중에 다시 그려지는 버튼(캡처 자동 인식 등)도 처리
    new MutationObserver(() => document.querySelectorAll('.btn, .tb-gh, .copy').forEach(attach))
      .observe(document.getElementById('scroll'), { childList: true, subtree: true });
  };
})();
