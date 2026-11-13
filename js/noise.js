/* =========================================================
   noise.js — 지글지글한 필름 노이즈 (Vue Bits "Noise" 를 옮긴 것)
   data-noise 가 붙은 상자 안에 캔버스를 깔아 줌
   ========================================================= */
(() => {
  const OPTIONS = {
    patternSize: 250,
    patternRefreshInterval: 2, // 몇 프레임마다 새로 그릴지
    patternAlpha: 15,          // 0 ~ 255
  };
  const SIZE = 1024;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function attach(box) {
    const canvas = document.createElement('canvas');
    canvas.className = 'noise';
    canvas.width = SIZE;
    canvas.height = SIZE;
    box.prepend(canvas);
    const ctx = canvas.getContext('2d', { alpha: true });
    const image = ctx.createImageData(SIZE, SIZE);
    const data = image.data;

    const draw = () => {
      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = OPTIONS.patternAlpha;
      }
      ctx.putImageData(image, 0, 0);
    };

    let visible = true;
    let frame = 0;
    new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
    }).observe(box);

    const loop = () => {
      if (visible && frame % OPTIONS.patternRefreshInterval === 0) draw();
      frame++;
      requestAnimationFrame(loop);
    };
    draw();
    if (!still) loop();
  }

  window.attachNoise = () => document.querySelectorAll('[data-noise]').forEach(attach);
})();
