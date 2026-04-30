import { chromium } from 'playwright';

const targets = [
  { url: 'http://localhost:3000/',     prefix: 'local' },
  { url: 'https://csportcenter.com/',  prefix: 'orig' },
];

const b = await chromium.launch();
for (const t of targets) {
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  await p.goto(t.url, { waitUntil: 'networkidle', timeout: 60000 }).catch(()=>{});
  await p.evaluate(async () => {
    await new Promise((r) => {
      let y = 0;
      const step = () => {
        window.scrollTo(0, y);
        y += 400;
        if (y < document.body.scrollHeight) setTimeout(step, 200);
        else { window.scrollTo(0, 0); setTimeout(r, 800); }
      };
      step();
    });
  });
  await p.waitForTimeout(1500);

  const total = await p.evaluate(() => document.body.scrollHeight);
  console.log(t.prefix, 'total height', total);
  const bandH = 900;
  for (let i = 0, y = 0; y < total; i++, y += bandH) {
    await p.evaluate((yy) => window.scrollTo(0, yy), y);
    await p.waitForTimeout(400);
    await p.screenshot({
      path: `/tmp/csport-shots/${t.prefix}-band${String(i).padStart(2,'0')}.png`,
      clip: { x: 0, y: 0, width: 1440, height: bandH },
    });
  }
  await ctx.close();
}
await b.close();
console.log('done');
