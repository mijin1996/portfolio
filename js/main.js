/* =========================================================
   main.js — 화면 그리기 (데이터는 projects.js)
   ========================================================= */
(() => {
const { PROFILE, PROJECTS, TEAM } = window.PORTFOLIO;
const { highlight, esc } = window.CodeHL;

const $ = (sel, root = document) => root.querySelector(sel);
const GROUPS = { unity: 'unity', web: 'web' };
const img = (p, file) => `assets/img/${p.dir || p.id}/${file}`;
const shortUrl = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

function ytId(v) {
  if (!v) return '';
  const m = v.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : v;
}

/* ---------- explorer ---------- */
function renderExplorer() {
  const item = (href, icon, label, extra = '') =>
    `<a class="tree-item ${extra}" href="${href}" data-target="${href.slice(1)}"><span class="ico">${icon}</span>${esc(label)}</a>`;
  const folder = (name, inner, open = true) =>
    `<details class="tree-dir" ${open ? 'open' : ''}><summary><span class="chev">›</span>📁 ${name}</summary>${inner}</details>`;

  const byGroup = (g) =>
    PROJECTS.filter((p) => p.group === g)
      .map((p) => item(`#p-${p.id}`, g === 'unity' ? '◆' : '◇', p.file, `g-${g}`))
      .join('');

  $('#explorer').innerHTML = `
    <div class="ex-title">EXPLORER</div>
    <div class="ex-root">▾ MIJIN1996</div>
    ${item('#home', 'ⓘ', 'README.md', 'g-md')}
    ${item('#projects', '≡', 'projects.ls', 'g-md')}
    ${folder(GROUPS.unity, byGroup('unity'))}
    ${folder(GROUPS.web, byGroup('web'))}
    ${folder('team', item('#team', '◇', 'team.md', 'g-md'))}
    ${item('#contact', '$', 'contact.sh', 'g-sh')}`;
}

/* ---------- home ---------- */
function renderHome() {
  // 이력 타임라인 — 오래된 것부터, 지금 다니는 곳은 초록 점
  const career = [
    ...PROFILE.experience.map((e) => ({ ...e, now: false })),
    ...PROFILE.education.map((e) => ({ ...e, now: true })),
  ].sort((x, y) => x.when.localeCompare(y.when));
  const timeline = career
    .map(
      (c) => `
      <li class="tl-item ${c.now ? 'now' : ''}">
        <span class="tl-dot"></span>
        <div class="tl-what">${c.what.split(' · ').map(esc).join('<br>')}</div>
        <div class="tl-when">[ ${esc(c.when)} ]</div>
      </li>`,
    )
    .join('');

  $('#home').innerHTML = `
    <div class="banner" data-noise>
      <div class="profile">
        <img class="profile-photo" src="assets/img/profile.jpg" alt="${esc(PROFILE.name)} 사진">
        <div class="profile-name" id="profile-name">${esc(PROFILE.name)}</div>
      </div>
      <div class="banner-inner">
        <h1 class="banner-title">${esc(PROFILE.motto)}</h1>
      </div>
    </div>
    <div class="hero">
      <ol class="timeline" aria-label="이력">${timeline}</ol>
      <div class="term" aria-label="terminal">
        <div class="term-bar"><i></i><i></i><i></i><span>bash — ~/mijin1996</span></div>
        <pre class="term-body" id="typed"></pre>
      </div>
    </div>
    <div class="about">
      <div class="sec-cmd"><span class="pr">$</span> cat about.md</div>
      ${PROFILE.about.map((t) => `<p>${esc(t)}</p>`).join('')}
      <div class="badges">${PROFILE.stack.map((s) => `<span class="badge">${esc(s)}</span>`).join('')}</div>
    </div>`;

  if (window.attachScramble) window.attachScramble($('#profile-name'));

  typeLines([
    ['cmd', 'what i Familiar'],
    ['out', 'Unity  Unreal'],
    ['cmd', 'ls ~/projects'],
    ['out', PROJECTS.map((p) => p.file.replace(/\.\w+$/, '/')).join('  ')],
    ['cmd', 'git remote -v'],
    ['out', `origin  https://github.com/${PROFILE.github}`],
  ]);
}

function typeLines(lines) {
  const el = $('#typed');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const render = (done, partial) =>
    done
      .map(([k, t]) => (k === 'cmd' ? `<span class="pr">❯</span> <span class="cmd">${esc(t)}</span>` : `<span class="out">${esc(t)}</span>`))
      .join('\n') + (partial ?? '') + '<span class="caret">▋</span>';

  if (reduce) {
    el.innerHTML = render(lines);
    return;
  }
  let i = 0;
  let c = 0;
  const done = [];
  const tick = () => {
    if (i >= lines.length) {
      el.innerHTML = render(done);
      return;
    }
    const [kind, text] = lines[i];
    if (kind === 'out') {
      done.push(lines[i]);
      i++;
      el.innerHTML = render(done);
      setTimeout(tick, 220);
      return;
    }
    c++;
    const pre = done.length ? '\n' : '';
    el.innerHTML = render(done, `${pre}<span class="pr">❯</span> <span class="cmd">${esc(text.slice(0, c))}</span>`);
    if (c >= text.length) {
      done.push(lines[i]);
      i++;
      c = 0;
      el.innerHTML = render(done);
      setTimeout(tick, 280);
    } else {
      setTimeout(tick, 45 + Math.random() * 50);
    }
  };
  tick();
}

/* ---------- projects overview ---------- */
// 표지: 캡처 → 없으면 YouTube 썸네일 → 그것도 없으면 제목 자리
const coverPh = (p) => `<div class="cover-ph"><span>${esc(p.title)}</span><code>${esc(p.engine)}</code></div>`;
window.coverFail = (im) => {
  if (im.dataset.next) {
    im.src = im.dataset.next;
    im.dataset.next = '';
  } else {
    const p = PROJECTS.find((x) => x.id === im.dataset.id);
    im.outerHTML = coverPh(p);
  }
};
function cover(p) {
  const id = ytId(p.youtube);
  const thumb = id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : '';
  const first = p.images.length ? img(p, p.images[0]) : thumb;
  const pic = first
    ? `<img src="${first}" data-next="${p.images.length ? thumb : ''}" data-id="${p.id}" onerror="coverFail(this)" alt="${esc(p.title)} 화면" loading="lazy">`
    : coverPh(p);
  return `${pic}<span class="chip g-${p.group}">${p.group}</span>${playBtn(p)}`;
}

// 재생 버튼 — 이 버튼을 눌러야만 영상이 재생됨
function playBtn(p) {
  const id = ytId(p.youtube);
  if (!id) return '';
  return `<button class="play-btn" data-play="${id}" data-title="${esc(p.title)}" aria-label="${esc(p.title)} 플레이 영상 재생" title="플레이 영상 재생"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l13-7.5Z" fill="currentColor"/></svg></button>`;
}

function renderOverview() {
  const rows = PROJECTS.map(
    (p) => `
    <a class="ls-row" href="#p-${p.id}">
      <span class="perm">drwxr-xr-x</span>
      <span class="date">${esc(p.period)}</span>
      <span class="name g-${p.group}">${esc(p.file.replace(/\.\w+$/, ''))}/</span>
      <span class="desc">${esc(p.tags.slice(0, 3).join(' · '))}</span>
    </a>`,
  ).join('');

  const cards = PROJECTS.map((p) => {
    return `
    <div class="card" data-id="${p.id}">
      <div class="cover">${cover(p)}</div>
      <div class="card-body">
        <h3><a class="card-link" href="#p-${p.id}">${esc(p.title)}</a></h3>
        <p>${esc(p.tagline)}</p>
        <div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
        ${linkRow(p)}
      </div>
    </div>`;
  }).join('');

  $('#projects').innerHTML = `
    <div class="sec-cmd"><span class="pr">$</span> ls -la ~/projects <span class="dim">// ${PROJECTS.length} items</span></div>
    <div class="ls">${rows}</div>
    <div class="cards">${cards}</div>`;
}


/* ---------- 버튼 아이콘 (SVG) ---------- */
const ICON = {
  joystick: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 15h10a4 4 0 0 1 4 4v1H3v-1a4 4 0 0 1 4-4Zm4-5.2V14h2V9.8a3 3 0 1 0-2 0Z"/><circle cx="17.5" cy="18" r="1.1" fill="#0b0f14"/></svg>',
  github: '<svg class="ico" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>',
  youtube: '<svg class="ico yt" viewBox="0 0 24 24" aria-hidden="true"><rect x="1.5" y="4.5" width="21" height="15" rx="4.5" fill="#ff0033"/><path d="M10 8.8v6.4l5.6-3.2Z" fill="#fff"/></svg>',
  globe: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Zm-9 9h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z"/></svg>',
};

/* ---------- project detail ---------- */
function linkRow(p) {
  // 아이콘만 있는 버튼 — 아이콘을 누르면 바로 이동, 마우스를 올리면 이름이 보임
  const icon = (href, ico, label, cls = '') =>
    `<a class="btn icon-btn ${cls}" href="${href}" target="_blank" rel="noopener" title="${esc(label)}" aria-label="${esc(label)}">${ico}</a>`;
  const links = [];
  if (p.play) links.push(icon(p.play, p.group === 'web' ? ICON.globe : ICON.joystick, p.playLabel ?? '플레이하기', 'primary'));
  return `<div class="links">${links.join('')}</div>`;
}

function media(p) {
  if (!p.images.length) {
    return `
    <div class="media">
      <div class="viewer ph">
        <div class="ph-inner">
          <div class="ph-icon">◉ REC</div>
          <div>플레이 캡처 준비 중</div>
          <code>${esc(p.engine)} · ${esc(p.platform)}</code>
        </div>
      </div>
    </div>`;
  }
  const tall = p.id === 'ururu';
  return `
    <div class="media ${tall ? 'tall' : ''}">
      <button class="viewer" data-zoom="${img(p, p.images[0])}">
        <img src="${img(p, p.images[0])}" alt="${esc(p.title)} 화면 1" loading="lazy">
      </button>
      <div class="thumbs">
        ${p.images
          .map(
            (f, i) =>
              `<button class="thumb ${i === 0 ? 'on' : ''}" data-src="${img(p, f)}" aria-label="화면 ${i + 1}"><img src="${img(p, f)}" alt="" loading="lazy"></button>`,
          )
          .join('')}
      </div>
    </div>`;
}

function workList(work) {
  return work
    .map(
      (w) => `
      <div class="work">
        <div class="work-head"><b>${esc(w.t)}</b>${(w.tech || []).map((t) => `<span class="tech">${esc(t)}</span>`).join('')}</div>
        <ul>${w.items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      </div>`,
    )
    .join('');
}

function planPanel(p) {
  const pl = p.plan;
  const n = p.notion;
  const rules = p.rules
    ? `<h4># 판정 규칙</h4>
       <table class="rules"><thead><tr><th>상황</th><th>COMBO</th><th>SCORE</th><th>MISS</th></tr></thead>
       <tbody>${p.rules.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`
    : '';
  const head = n
    ? `<h4># 기획 의도</h4>
       <ul>${n.intent.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
       <h4># 개발 및 수행 내용</h4>
       ${workList(n.work)}`
    : `<h4># 목표</h4>
       <p>${esc(pl.goal)}</p>
       <h4># 핵심 기능</h4>
       <ul>${pl.points.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`;
  const flow = p.flow
    ? `<h4># 동작 흐름</h4>
       <button class="flow" data-zoom="${img(p, p.flow.svg)}"><img src="${img(p, p.flow.svg)}" alt="${esc(p.title)} 동작 흐름"></button>
       <ol class="flow-steps">${p.flow.steps.map((t) => `<li>${esc(t)}</li>`).join('')}</ol>`
    : '';
  const retro = n && n.retro.length
    ? `<h4># 회고</h4><blockquote class="retro">${n.retro.map((t) => `<p>${esc(t)}</p>`).join('')}</blockquote>`
    : '';
  return `
    <div class="md">
      ${head}
      ${rules}
      ${flow}
      ${retro}
    </div>`;
}

/* ---------- Unity 창: 기능 버튼마다 실제 에디터 캡처 (projects.js 의 shots) ---------- */
function unityWindow(p) {
  if (!p.shots || !p.shots.length) return '';
  const chips = p.shots
    .map(([label], i) => `<button class="u-chip ${i === 0 ? 'on' : ''}" data-u="${i}">${esc(label)}</button>`)
    .join('');
  const panes = p.shots
    .map(
      ([label, file], i) => `
    <div class="u-pane ${i === 0 ? 'on' : ''}" data-u-pane="${i}">
      <button class="u-img" data-zoom="${img(p, file)}"><img src="${img(p, file)}" alt="${esc(label)} — Unity 에디터 화면" loading="lazy"></button>
    </div>`,
    )
    .join('');
  return `
    <div class="unity">
      <div class="u-bar"><i></i><i></i><i></i><span>Unity 6 — ${esc(p.scene.split('/').pop())}</span><span class="u-path">🔗 ${esc(p.scene)}</span></div>
      <div class="u-chips">${chips}</div>
      ${panes}
    </div>`;
}

function setupPanel(p) {
  return `
    <div class="kv">
      ${p.setup.map(([k, v]) => `<div class="kv-row"><span class="k">"${esc(k)}"</span><span class="colon">:</span><span class="v">${esc(v)}</span></div>`).join('')}
    </div>
    ${p.group === 'web' ? '' : `<div class="steps">
      <div class="steps-head">▸ 실행 · 설정 순서</div>
      ${p.steps.map((s, i) => `<div class="step"><span class="num">${String(i + 1).padStart(2, '0')}</span><code>${esc(s)}</code></div>`).join('')}
    </div>`}`;
}

function codePanel(p, c) {
  return `
    <div class="code-head">
      <span class="code-path">${esc(c.path)}</span>
      <span class="note">// ${esc(c.note)}</span>
      <button class="copy" data-code="${p.id}:${c.name}">copy</button>
    </div>
    <pre class="code numbered lang-${c.lang}">${highlight(c.src)}</pre>`;
}

// GitHub Pages(또는 내 컴퓨터 서버)에서는 사이트 안에서 바로 재생,
// 파일로 열었거나 다른 곳에 올렸을 때는 캡처 + "YouTube 에서 보기" 카드
const CAN_EMBED = /github\.io$|^localhost$|^127\.0\.0\.1$/.test(location.hostname);

function videoPanel(p) {
  const id = ytId(p.youtube);
  if (id && CAN_EMBED) {
    return `<div class="video"><iframe referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube-nocookie.com/embed/${id}" title="${esc(p.title)} 플레이 영상" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
  }
  if (id) {
    const poster = p.images.length ? img(p, p.images[Math.min(1, p.images.length - 1)]) : `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    return `
    <a class="video thumb-link" href="https://youtu.be/${id}" target="_blank" rel="noopener">
      <img src="${poster}" alt="${esc(p.title)} 플레이 영상">
      <span class="play-badge">▶ YouTube 에서 보기</span>
    </a>`;
  }
  return `
    <div class="video ph">
      <div class="ph-inner">
        <div class="ph-icon">▶</div>
        <div>플레이 영상 준비 중</div>
        ${p.play ? `<a href="${p.play}" target="_blank" rel="noopener">🔗 ${esc(shortUrl(p.play))} 에서 바로 플레이</a>` : ''}
      </div>
    </div>`;
}

function renderDetails() {
  $('#details').innerHTML = PROJECTS.map((p) => {
    const ext = p.group === 'unity' ? 'cs' : 'js';
    const tabs = [
      ['plan', '기획.md', planPanel(p)],
      ['tree', '구성.tree', `<pre class="code tree">${highlightTree(p.tree)}</pre>`],
      ['setup', '설정.json', setupPanel(p)],
      ...p.code.map((c, i) => [`code${i}`, c.name, codePanel(p, c), ext]),
    ];
    return `
    <section class="proj" id="p-${p.id}" data-file="${esc(p.file)}">
      <div class="crumb">${p.group} <span>›</span> ${esc(p.file.replace(/\.\w+$/, ''))} <span>›</span> README.md</div>
      <div class="proj-head">
        ${p.icon ? `<img class="icon" src="${img(p, p.icon)}" alt="" onerror="this.outerHTML='<div class=&quot;icon ph-ico&quot;>${p.group === 'unity' ? '◆' : '◇'}</div>'">` : `<div class="icon ph-ico">${p.group === 'unity' ? '◆' : '◇'}</div>`}
        <div>
          <h2>${esc(p.title)}</h2>
          <p class="tagline">${esc(p.tagline)}</p>
        </div>
      </div>
      <dl class="meta">
        <div><dt>engine</dt><dd>${esc(p.engine)}</dd></div>
        <div><dt>platform</dt><dd>${esc(p.platform)}</dd></div>
        <div><dt>role</dt><dd>${esc(p.role)}</dd></div>
        <div><dt>period</dt><dd>${esc(p.period)}</dd></div>
      </dl>
      <div class="editor">
        <div class="etabs" role="tablist">
          ${tabs.map(([k, label], i) => `<button role="tab" class="etab ${i === 0 ? 'on' : ''}" data-tab="${k}"><span class="dot t-${tabKind(k)}"></span>${esc(label)}</button>`).join('')}
        </div>
        ${tabs.map(([k, , html], i) => `<div class="epanel ${i === 0 ? 'on' : ''}" data-panel="${k}" role="tabpanel">${html}</div>`).join('')}
      </div>
      ${unityWindow(p)}
    </section>`;
  }).join('');
}

const tabKind = (k) => (k.startsWith('code') ? 'code' : k);

function highlightTree(src) {
  return esc(src)
    .split('\n')
    .map((line) =>
      line
        .replace(/(#.*)$/, '<span class="c">$1</span>')
        .replace(/([├└│─]+)/g, '<span class="dim">$1</span>')
        .replace(/([\w.-]+\/)/g, '<span class="t">$1</span>')
        .replace(/([\w-]+\.(cs|js|jsx|md|unity|css))/g, '<span class="f">$1</span>'),
    )
    .join('\n');
}

/* ---------- 캡처 자동 인식 ----------
   images 가 비어 있는 프로젝트는 assets/img/<id>/00.jpg ~ 09.jpg (또는 .png) 를
   찾아서, 있는 사진만 바로 화면에 넣어 줌 → 사진 파일만 넣으면 끝 */
function canLoad(src) {
  return new Promise((resolve) => {
    const im = new Image();
    im.onload = () => resolve(true);
    im.onerror = () => resolve(false);
    im.src = src;
  });
}

async function findCaptures(p) {
  const names = [];
  for (let i = 0; i < 10; i++) {
    const n = String(i).padStart(2, '0');
    names.push(`${n}.jpg`, `${n}.png`);
  }
  const ok = await Promise.all(names.map((f) => canLoad(img(p, f))));
  return names.filter((_, i) => ok[i]);
}

function loadCaptures() {
  PROJECTS.filter((p) => !p.images.length).forEach(async (p) => {
    const found = await findCaptures(p);
    if (!found.length) return;
    p.images = found;
    const box = document.querySelector(`#p-${p.id} .media`);
    if (box) box.outerHTML = media(p);
    const card = document.querySelector(`.card[data-id="${p.id}"] .cover`);
    if (card) card.innerHTML = cover(p);
  });
}

/* ---------- team / contact ---------- */
function renderTeam() {
  $('#team').innerHTML = `
    <div class="sec-cmd"><span class="pr">$</span> cat team.md</div>
    ${TEAM.map(
      (t) => `
      <div class="team-card">
        <div class="proj-head">
          ${t.icon ? `<img class="icon" src="assets/img/team/${t.icon}" alt="">` : '<div class="icon ph-ico">▲</div>'}
          <div><h2>${esc(t.title)}</h2><p class="tagline">${esc(t.tagline)}</p></div>
        </div>
        <dl class="meta">
          <div><dt>tool</dt><dd>MakeView (AR)</dd></div>
          <div><dt>award</dt><dd>🏅 ${esc(t.award)}</dd></div>
          <div><dt>role</dt><dd>${esc(t.role)}</dd></div>
          <div><dt>period</dt><dd>${esc(t.period)}</dd></div>
        </dl>
        <div class="play-wrap">${media({ ...t, id: 'team' })}${playBtn(t)}</div>
        <div class="editor"><div class="epanel on">
          <div class="md">
            <h4># 기획 의도</h4><ul>${t.intent.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
            <h4># 개발 및 수행 내용</h4>${workList(t.work)}
            <h4># 회고</h4><blockquote class="retro">${t.retro.map((x) => `<p>${esc(x)}</p>`).join('')}</blockquote>
          </div>
        </div></div>
      </div>`,
    ).join('')}`;
}

const CREDITS = [
  ['Noise · Cubes · Scramble Text', 'Vue Bits (React Bits by David Haz) — 프레임워크 없이 옮겨 씀', 'https://vue-bits.dev'],
  ['WebGL Fluid Simulation', 'Pavel Dobryakov · MIT License', 'https://github.com/PavelDoGreat/WebGL-Fluid-Simulation'],
  ['JetBrains Mono', 'JetBrains · SIL Open Font License 1.1', 'https://www.jetbrains.com/lp/mono/'],
  ['Pretendard', 'Kil Hyung-jin · SIL Open Font License 1.1', 'https://github.com/orioncactus/pretendard'],
  ['게임 플레이 영상 · 캡처', '본인 YouTube 영상 · GameJolt 페이지', 'https://gamejolt.com/@mijin'],
  ['Unity 에셋', 'XR Interaction Toolkit · Cinemachine · AI Navigation (Unity) · UniTask (Cysharp) · Joystick Pack · Cartoon FX Remaster · Toony Colors Pro · FloatingTextEngine Lite', ''],
  ['포트폴리오 내용', 'Notion — 진미 | Game · XR', 'https://app.notion.com/p/Game-XR-Developer-40c0010901598004aeb1dab573736556'],
];

function renderContact() {
  $('#contact').innerHTML = `
    <div class="term wide">
      <div class="term-bar"><i></i><i></i><i></i><span>contact.sh</span></div>
      <pre class="term-body"><span class="pr">❯</span> <span class="cmd">./contact.sh</span>
<span class="out">mail    → </span><a href="mailto:${PROFILE.mail}">${PROFILE.mail}</a>
<span class="out">repos   → </span><span id="repo-count">${PROJECTS.length} public projects</span>
<span class="pr">❯</span> <span class="caret">▋</span></pre>
    </div>
    <div class="credits">
      <div class="sec-cmd"><span class="pr">$</span> cat CREDITS.md</div>
      <table>${CREDITS.map(([a, b, url]) => `<tr><th>${esc(a)}</th><td>${esc(b)}${url ? ` <a href="${url}" target="_blank" rel="noopener">🔗</a>` : ''}</td></tr>`).join('')}</table>
    </div>
    <p class="foot">© ${new Date().getFullYear()} ${esc(PROFILE.name)} · built with plain HTML · CSS · JS · hosted on GitHub Pages</p>`;
}

/* ---------- background code rain ---------- */
function renderBackground() {
  const text = PROJECTS.flatMap((p) => p.code.map((c) => c.src)).join('\n\n');
  $('#bgcode').textContent = text.repeat(2);
}

/* ---------- 영상 플레이어 (재생 버튼을 눌렀을 때만 열림) ---------- */
function openPlayer(id, title) {
  let box = document.getElementById('player');
  if (!box) {
    box = document.createElement('div');
    box.id = 'player';
    box.className = 'player';
    box.innerHTML = '<div class="player-box"><button class="player-x" aria-label="닫기">✕</button><div class="player-body"></div></div>';
    document.body.appendChild(box);
  }
  const body = box.querySelector('.player-body');
  body.innerHTML = CAN_EMBED
    ? `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="${esc(title)} 플레이 영상" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`
    : `<div class="player-out"><div>이 화면에서는 영상을 바로 재생할 수 없어요</div><a class="btn primary" href="https://youtu.be/${id}" target="_blank" rel="noopener">▶ YouTube 에서 ${esc(title)} 보기</a></div>`;
  box.classList.add('on');
}

function closePlayer() {
  const box = document.getElementById('player');
  if (!box) return;
  box.classList.remove('on');
  box.querySelector('.player-body').innerHTML = '';
}

/* ---------- interactions ---------- */
function bind() {
  document.addEventListener('click', (e) => {
    const play = e.target.closest('.play-btn');
    if (play) {
      e.preventDefault();
      e.stopPropagation();
      openPlayer(play.dataset.play, play.dataset.title);
      return;
    }
    if (e.target.closest('.player-x') || e.target.id === 'player') {
      closePlayer();
      return;
    }
    const tab = e.target.closest('.etab');
    if (tab) {
      const ed = tab.closest('.editor');
      ed.querySelectorAll('.etab').forEach((t) => t.classList.toggle('on', t === tab));
      ed.querySelectorAll('.epanel').forEach((pn) => pn.classList.toggle('on', pn.dataset.panel === tab.dataset.tab));
      return;
    }
    const chip = e.target.closest('.u-chip');
    if (chip) {
      const box = chip.closest('.unity');
      box.querySelectorAll('.u-chip').forEach((c) => c.classList.toggle('on', c === chip));
      box.querySelectorAll('.u-pane').forEach((c) => c.classList.toggle('on', c.dataset.uPane === chip.dataset.u));
      return;
    }
    const thumb = e.target.closest('.thumb');
    if (thumb) {
      const m = thumb.closest('.media');
      m.querySelectorAll('.thumb').forEach((t) => t.classList.toggle('on', t === thumb));
      const v = m.querySelector('.viewer');
      v.dataset.zoom = thumb.dataset.src;
      v.querySelector('img').src = thumb.dataset.src;
      return;
    }
    const zoom = e.target.closest('[data-zoom]');
    if (zoom) {
      $('#lightbox img').src = zoom.dataset.zoom;
      $('#lightbox').classList.add('on');
      return;
    }
    if (e.target.closest('#lightbox')) {
      $('#lightbox').classList.remove('on');
      return;
    }
    const copy = e.target.closest('[data-copy], .copy');
    if (copy) {
      let text = copy.dataset.copy;
      if (!text) {
        const [id, name] = copy.dataset.code.split(':');
        text = PROJECTS.find((p) => p.id === id).code.find((c) => c.name === name).src;
      }
      navigator.clipboard?.writeText(text).then(() => toast('복사했어요'), () => toast(text));
      return;
    }
    if (e.target.closest('.tree-item') && window.innerWidth < 900) {
      document.body.classList.remove('nav-open');
    }
    if (e.target.closest('#menu')) {
      document.body.classList.toggle('nav-open');
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      $('#lightbox').classList.remove('on');
      closePlayer();
    }
  });

  // 지금 보고 있는 섹션 → 탐색기 · 탭 · 상태바 표시
  const names = { home: 'README.md', projects: 'projects.ls', team: 'team.md', contact: 'contact.sh' };
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const id = en.target.id;
        const file = en.target.dataset.file ?? names[id] ?? id;
        document.querySelectorAll('.tree-item').forEach((a) => a.classList.toggle('active', a.dataset.target === id));
        $('#cur-tab').textContent = file;
        $('#sb-file').textContent = file;
        $('#sb-lang').textContent = /\.(unity|cs)$/.test(file) ? 'C#' : /\.jsx?$/.test(file) ? 'JavaScript' : 'Markdown';
      });
    },
    { root: $('#scroll'), rootMargin: '-40% 0px -55% 0px' },
  );
  document.querySelectorAll('#scroll > section, .proj').forEach((s) => io.observe(s));

  const clock = () => {
    $('#sb-time').textContent = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
  };
  clock();
  setInterval(clock, 30000);
}

let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('on'), 1600);
}

// GitHub 공개 저장소 수 (실패하면 그대로 둠)
async function loadGithub() {
  try {
    const res = await fetch(`https://api.github.com/users/${PROFILE.github}`);
    if (!res.ok) return;
    const u = await res.json();
    $('#repo-count').textContent = `${u.public_repos} public repos`;
    $('#sb-repos').textContent = `${u.public_repos} repos`;
  } catch {
    /* 오프라인 */
  }
}

renderExplorer();
renderHome();
renderOverview();
renderDetails();
renderTeam();
renderContact();
renderBackground();
bind();
window.attachNoise?.();
window.attachCubes?.();
loadCaptures();
loadGithub();
})();
