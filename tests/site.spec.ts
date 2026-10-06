import { test, expect } from '@playwright/test';
test('contenido aprobado, SEO, assets y responsive', async ({ page }, testInfo) => {
 const errors: string[] = [];
 page.on('pageerror', e => errors.push(e.message));
 await page.goto('./');
 await expect(page.locator('h1')).toHaveCount(1);
 await expect(page.locator('h1')).toHaveText('Construimos soluciones que perduran.');
 await expect(page.locator('.service-card')).toHaveCount(6);
 await expect(page.locator('.project-card')).toHaveCount(5);
 const whatsapp = page.locator('a[href*="wa.me"]');
 await expect(whatsapp).toHaveCount(2);
 for (const link of await whatsapp.all()) {
  await expect(link).toHaveAttribute('href', 'https://wa.me/529617857513?text=Hola%2C%20me%20interesa%20solicitar%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Constructora%20ROGIN.');
  await expect(link).toHaveAttribute('target', '_blank');
 }
 await expect(page.getByText('Próximamente')).toHaveCount(0);
 await expect(page.locator('.hero img')).toHaveCount(1);
 await expect(page.locator('.hero img')).toHaveAttribute('src', /hero\/rogin-hero-panoramico.webp$/);
 await expect(page.locator('.about img')).toHaveCount(1);
 await expect(page.locator('.support-art')).toHaveCount(0);
 for (const label of ['Nosotros', 'Servicios', 'Proyectos destacados', 'Contacto']) {
  await expect(page.locator('main .eyebrow').filter({ hasText: new RegExp(`^${label}$`) })).toHaveCount(1);
 }
 const imageSizes = await page.locator('.project-image img').evaluateAll(images => images.map(image => {
  const rect = image.getBoundingClientRect(); return { width: rect.width, ratio: rect.width / rect.height };
 }));
 for (const size of imageSizes) {
  expect(size.ratio).toBeCloseTo(1.5, 2);
  expect(size.width).toBeCloseTo(imageSizes[0].width, 0);
 }
 const floating = page.locator('.whatsapp-float');
 await expect(floating).toBeVisible();
 await floating.focus();
 await expect(floating).toBeFocused();
 await expect(floating).toHaveAccessibleName(/Constructora ROGIN por WhatsApp/);
 await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://www.constructorarogin.com/');
 for (const image of await page.locator('img').all()) { await image.scrollIntoViewIfNeeded(); await expect(image).toHaveJSProperty('complete', true); expect(await image.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0); }
 for (const section of ['inicio','nosotros','servicios','proyectos','contacto']) {
  await page.locator(`#${section}`).scrollIntoViewIfNeeded();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
 }
 await page.locator('#contacto').scrollIntoViewIfNeeded();
 await expect(page.locator('.whatsapp-float')).toBeInViewport();
 await expect(page.getByRole('link', { name: 'Solicitar cotización' }).last()).toHaveAttribute('href', /^mailto:contacto@constructorarogin.com\?subject=/);
 expect(errors).toEqual([]);
 await page.goto('./');
 await page.screenshot({ path: `test-results/rogin-${testInfo.project.name}.png`, fullPage: true, scale: 'css' });
 await page.screenshot({ path: `test-results/hero-${testInfo.project.name}.png`, scale: 'css' });
 await page.locator('#proyectos').scrollIntoViewIfNeeded();
 await page.screenshot({ path: `test-results/projects-${testInfo.project.name}.png`, scale: 'css' });
 await page.locator('#contacto').scrollIntoViewIfNeeded();
 await page.screenshot({ path: `test-results/contact-${testInfo.project.name}.png`, scale: 'css' });
});
test('navegación móvil y teclado', async ({ page }) => {
 await page.goto('./');
 const menu = page.locator('.menu-toggle');
 if (await menu.isVisible()) {
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await expect(menu).toBeFocused();
  await menu.click();
 }
 await page.getByRole('navigation').getByRole('link', { name: 'Proyectos', exact: true }).click();
 await expect(page).toHaveURL(/#proyectos$/);
 if (await menu.isVisible()) await expect(menu).toHaveAttribute('aria-expanded', 'false');
});

test('hero: CTA, fondo completo y movimiento reducido', async ({ page }) => {
 await page.goto('./');
 const background = page.locator('.hero-background');
 await expect(background).toHaveAttribute('fetchpriority', 'high');
 await expect(background).not.toHaveAttribute('loading', 'lazy');
 expect(await background.evaluate(node => getComputedStyle(node).animationName)).toBe('none');
 const bounds = await page.locator('.hero').boundingBox();
 const imageBounds = await background.boundingBox();
 expect(imageBounds?.width).toBe(bounds?.width);
 expect(imageBounds?.height).toBe(bounds?.height);
 for (const [name, hash] of [['Solicitar cotización', '#contacto'], ['Conocer proyectos', '#proyectos']]) {
  await page.locator('.hero').getByRole('link', { name }).click();
  await expect(page).toHaveURL(new RegExp(`${hash}$`));
  await page.goto('./');
 }
 await page.emulateMedia({ reducedMotion: 'no-preference' });
 await page.reload();
 expect(await background.evaluate(node => getComputedStyle(node).animationName)).toBe('hero-background-enter');
 await page.waitForTimeout(1500);
 for (const selector of ['.hero-background', '.hero-copy > .eyebrow', '.hero h1', '.hero-copy > p', '.hero .actions', '.hero-location']) {
  expect(await page.locator(selector).evaluate(node => getComputedStyle(node).opacity)).toBe('1');
 }
 expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test('anclas alineadas con navbar y fondos sin franjas', async ({ page }) => {
 await page.goto('./');
 const sections = ['inicio', 'nosotros', 'servicios', 'proyectos', 'contacto'];
 for (const id of sections) {
  const menu = page.locator('.menu-toggle');
  if (await menu.isVisible()) await menu.click();
  await page.locator(`#navigation a[href="#${id}"]`).first().click();
  await expect.poll(async () => page.evaluate(id => {
   const header = document.querySelector('.header')!.getBoundingClientRect();
   const section = document.getElementById(id)!.getBoundingClientRect();
   return Math.abs(header.bottom - section.top);
  }, id)).toBeLessThan(1);
 }
 await page.goto('./#contacto');
 await expect.poll(async () => page.evaluate(() => Math.abs(document.querySelector('.header')!.getBoundingClientRect().bottom - document.getElementById('contacto')!.getBoundingClientRect().top))).toBeLessThan(1);
 const layout = await page.evaluate(() => {
  const wrappers = [...document.querySelectorAll('main > section'), document.querySelector('footer')!];
  return wrappers.map((node, index) => {
   const rect = node.getBoundingClientRect();
   return { width: rect.width, background: getComputedStyle(node).backgroundColor, gap: index ? rect.top - wrappers[index - 1].getBoundingClientRect().bottom : 0 };
  });
 });
 for (const section of layout) {
  expect(section.gap).toBeCloseTo(0, 1);
  expect(section.width).toBe(await page.evaluate(() => window.innerWidth));
  expect(section.background).not.toBe('rgba(0, 0, 0, 0)');
 }
 expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
 await page.screenshot({ path: `test-results/anchor-contact-${page.viewportSize()!.width}.png`, scale: 'css' });
 await page.goto('./#nosotros');
 await page.screenshot({ path: `test-results/anchor-about-${page.viewportSize()!.width}.png`, scale: 'css' });
});
