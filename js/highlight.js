/* =========================================================
   highlight.js — 작은 코드 색칠기 (C# / JS), 외부 라이브러리 없음
   ========================================================= */

(() => {
const KEYWORDS = new Set(`
abstract as async await base bool break byte case catch char class const continue
decimal default delegate do double else enum event explicit extern false finally
fixed float for foreach get goto if implicit in int interface internal is lock long
namespace new null object operator out override params private protected public
readonly ref return sbyte sealed set short sizeof static string struct switch this
throw true try typeof uint ulong unchecked unsafe ushort using var virtual void
volatile while where yield let function export import from extends super undefined
`.trim().split(/\s+/));

const TOKEN = new RegExp(
  [
    '(\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)',                    // 1 comment
    '(\\$?"(?:\\\\.|[^"\\\\\\n])*"|\'(?:\\\\.|[^\'\\\\\\n])*\')', // 2 string
    '(\\b\\d+(?:\\.\\d+)?f?\\b)',                                 // 3 number
    '(#?[A-Za-z_]\\w*)',                                          // 4 word
  ].join('|'),
  'g',
);

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function highlight(src) {
  let out = '';
  let last = 0;
  for (const m of src.matchAll(TOKEN)) {
    out += esc(src.slice(last, m.index));
    const [text, comment, str, num, word] = m;
    let cls = '';
    if (comment) cls = 'c';
    else if (str) cls = 's';
    else if (num) cls = 'n';
    else if (word) {
      const next = src.slice(m.index + text.length).match(/^\s*(\(|<)/);
      if (KEYWORDS.has(word)) cls = 'k';
      else if (word.startsWith('#')) cls = 'p';
      else if (next && next[1] === '(') cls = 'f';
      else if (/^[A-Z]/.test(word)) cls = 't';
    }
    out += cls
      ? `<span class="${cls}">${esc(text).replace(/\n/g, `</span>\n<span class="${cls}">`)}</span>`
      : esc(text);
    last = m.index + text.length;
  }
  out += esc(src.slice(last));
  return out
    .split('\n')
    .map((line) => `<span class="ln">${line || ' '}</span>`)
    .join('');
}

window.CodeHL = { highlight, esc };
})();
