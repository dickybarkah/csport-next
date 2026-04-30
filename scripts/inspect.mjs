import { chromium } from 'playwright';
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
await p.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

const data = await p.evaluate(() => {
  const root = getComputedStyle(document.documentElement);
  const tokens = ['--text-xs','--text-s','--text-m','--text-l','--text-xl','--text-2xl','--text-3xl','--text-4xl','--space-l','--space-xl','--space-2xl','--max-w'];
  const out = {};
  for (const t of tokens) out[t] = root.getPropertyValue(t).trim();
  // Sample heading
  const h2 = document.querySelector('#facilities h2');
  if (h2) {
    const cs = getComputedStyle(h2);
    out._h2_font_size = cs.fontSize;
    out._h2_font_family = cs.fontFamily;
  }
  const heroH1 = document.querySelector('h1');
  if (heroH1) {
    const cs = getComputedStyle(heroH1);
    out._h1_font_size = cs.fontSize;
  }
  return out;
});
console.log(JSON.stringify(data, null, 2));
await b.close();
