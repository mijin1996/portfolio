/* =========================================================
   scramble.js — 마우스 가까이 있는 글자가 잠깐 다른 기호로 섞였다가 돌아오는 효과
   (Vue Bits "Scramble Text" 를 라이브러리 없이 옮김)
   사용: window.attachScramble(element, { radius, duration, chars })
   ========================================================= */
(() => {
  const DEFAULTS = { radius: 100, duration: 1200, chars: '.:' };

  window.attachScramble = (el, options = {}) => {
    const { radius, duration, chars } = { ...DEFAULTS, ...options };
    const text = el.textContent;
    el.textContent = '';
    el.setAttribute('aria-label', text);
    const spans = [...text].map((ch) => {
      const s = document.createElement('span');
      s.className = 'scr-ch';
      s.textContent = ch;
      s.dataset.ch = ch;
      s.setAttribute('aria-hidden', 'true');
      el.appendChild(s);
      return s;
    });

    const busyUntil = new WeakMap();
    const scramble = (s, ms) => {
      const end = performance.now() + ms;
      if ((busyUntil.get(s) ?? 0) > performance.now()) {
        busyUntil.set(s, Math.max(busyUntil.get(s), end));
        return;
      }
      busyUntil.set(s, end);
      const step = () => {
        if (performance.now() >= busyUntil.get(s)) {
          s.textContent = s.dataset.ch;
          return;
        }
        s.textContent = chars[Math.floor(Math.random() * chars.length)];
        setTimeout(step, 50);
      };
      step();
    };

    // 가까운 글자일수록 오래 섞인다
    const onMove = (e) => {
      spans.forEach((s) => {
        if (s.dataset.ch.trim() === '') return;
        const r = s.getBoundingClientRect();
        const dist = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
        if (dist < radius) scramble(s, duration * (1 - dist / radius));
      });
    };
    (el.closest('.banner') || el).addEventListener('pointermove', onMove);
  };
})();
