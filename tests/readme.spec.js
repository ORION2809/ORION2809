// @ts-check
const { test, expect } = require('@playwright/test');
const path = require('path');

const PREVIEW = `file://${path.join(__dirname, '..', 'preview.html').replace(/\\/g, '/')}`;

test.describe('ORION2809 GitHub Profile README', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(PREVIEW, { waitUntil: 'domcontentloaded' });
  });

  // ──────────────────────────────────────────
  // SECTION 1 — Hero & Header
  // ──────────────────────────────────────────

  test('hero SVG banner loads', async ({ page }) => {
    const heroImg = page.locator('img[alt*="cinematic command deck"]');
    await expect(heroImg).toBeVisible();
    const src = await heroImg.getAttribute('src');
    expect(src).toContain('orion-hero-v2.svg');
  });

  test('typing SVG animation present', async ({ page }) => {
    const typingSvg = page.locator('img[alt*="Animated typing banner"]');
    await expect(typingSvg).toBeVisible();
    const src = await typingSvg.getAttribute('src');
    expect(src).toContain('readme-typing-svg');
  });

  test('profile badges render (at least 4)', async ({ page }) => {
    const badges = page.locator('img[src*="shields.io/badge"]');
    const count = await badges.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });

  test('profile view counter present', async ({ page }) => {
    const counter = page.locator('img[alt="Profile view counter"]');
    await expect(counter).toBeVisible();
  });

  // ──────────────────────────────────────────
  // SECTION 2 — Neon Dividers
  // ──────────────────────────────────────────

  test('neon divider SVGs present (multiple sections)', async ({ page }) => {
    const dividers = page.locator('img[src*="orion-divider.svg"]');
    const count = await dividers.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  // ──────────────────────────────────────────
  // SECTION 3 — whoami / Control Signal
  // ──────────────────────────────────────────

  test('whoami JSON block contains identity', async ({ page }) => {
    const codeBlock = page.locator('code:has-text("Shreyas Suvarna")');
    await expect(codeBlock).toBeVisible();
  });

  test('current vector table present', async ({ page }) => {
    const table = page.locator('text=Agentic DevTools');
    await expect(table).toBeVisible();
  });

  test('ship style table present', async ({ page }) => {
    const table = page.locator('text=Deterministic loops');
    await expect(table).toBeVisible();
  });

  // ──────────────────────────────────────────
  // SECTION 4 — Project Constellation
  // ──────────────────────────────────────────

  test('project constellation SVG loads', async ({ page }) => {
    const constellation = page.locator('img[alt*="constellation"]');
    await expect(constellation).toBeVisible();
  });

  // ──────────────────────────────────────────
  // SECTION 5 — Latest Launch Bay (Projects)
  // ──────────────────────────────────────────

  test('latest launch bay heading present', async ({ page }) => {
    const heading = page.locator('text=Latest Launch Bay');
    await expect(heading).toBeVisible();
  });

  test('all 6 project cards present', async ({ page }) => {
    const projectNames = [
      'Career-Ops',
      'Prove-It-Mode',
      'Claw Code',
      'Claude Fulcrum',
      'AI Onboarding Orchestrator',
      'Agentic Orchestration Engine',
    ];
    for (const name of projectNames) {
      const el = page.locator(`text=${name}`).first();
      await expect(el).toBeVisible();
    }
  });

  test('project cards have tech badge images', async ({ page }) => {
    const techBadges = page.locator('img[src*="shields.io/badge"][alt]');
    const count = await techBadges.count();
    expect(count).toBeGreaterThanOrEqual(20);
  });

  test('project links point to GitHub repos', async ({ page }) => {
    const links = page.locator('a[href*="github.com/ORION2809/"]');
    const count = await links.count();
    expect(count).toBeGreaterThanOrEqual(6);
  });

  // ──────────────────────────────────────────
  // SECTION 6 — System Map
  // ──────────────────────────────────────────

  test('system map SVG loads', async ({ page }) => {
    const systemMap = page.locator('img[alt*="system map"]');
    await expect(systemMap).toBeVisible();
  });

  test('system map phase table has 5 rows', async ({ page }) => {
    // Look for the system map related table content
    const phases = ['Research signals', 'Typed plan', 'Agentic build loop', 'Browser validation', 'Reusable system'];
    for (const phase of phases) {
      await expect(page.locator(`text=${phase}`).first()).toBeVisible();
    }
  });

  // ──────────────────────────────────────────
  // SECTION 7 — Stack Radar
  // ──────────────────────────────────────────

  test('stack radar heading present', async ({ page }) => {
    const heading = page.locator('text=Stack Radar');
    await expect(heading).toBeVisible();
  });

  test('tech radar SVG loads', async ({ page }) => {
    const radar = page.locator('img[alt*="tech stack radar"]');
    await expect(radar).toBeVisible();
  });

  // ──────────────────────────────────────────
  // SECTION 8 — Telemetry / Stats
  // ──────────────────────────────────────────

  test('telemetry section heading present', async ({ page }) => {
    const heading = page.locator('text=Telemetry');
    await expect(heading).toBeVisible();
  });

  test('streak stats image present', async ({ page }) => {
    const streak = page.locator('img[alt="GitHub streak stats"]');
    await expect(streak).toBeVisible();
  });

  test('activity graph image present', async ({ page }) => {
    const graph = page.locator('img[alt*="activity graph"]');
    await expect(graph).toBeVisible();
  });

  test('contribution snake animation present', async ({ page }) => {
    const snake = page.locator('img[alt="Animated contribution snake"]');
    await expect(snake).toBeVisible();
  });

  // ──────────────────────────────────────────
  // SECTION 9 — Signal Archive
  // ──────────────────────────────────────────

  test('signal archive heading present', async ({ page }) => {
    const heading = page.locator('text=Signal Archive');
    await expect(heading).toBeVisible();
  });

  test('archive projects listed', async ({ page }) => {
    const archiveProjects = ['XAI Tachycardia', 'Aquaculture AI', '3D Object View', 'RLRAG'];
    for (const project of archiveProjects) {
      await expect(page.locator(`text=${project}`).first()).toBeVisible();
    }
  });

  // ──────────────────────────────────────────
  // SECTION 10 — Footer
  // ──────────────────────────────────────────

  test('footer SVG loads', async ({ page }) => {
    const footer = page.locator('img[alt*="Ship the loop"]');
    await expect(footer).toBeVisible();
  });

  test('footer wave renders', async ({ page }) => {
    const wave = page.locator('img[alt="Neon footer wave"]');
    await expect(wave).toBeVisible();
  });

  test('fulcrum badge present in footer', async ({ page }) => {
    const fulcrum = page.locator('img[alt="Claude Fulcrum"]');
    await expect(fulcrum).toBeVisible();
  });

  // ──────────────────────────────────────────
  // SECTION 11 — Accessibility & Structure
  // ──────────────────────────────────────────

  test('all images have alt text', async ({ page }) => {
    const imagesWithoutAlt = await page.locator('img:not([alt])').count();
    expect(imagesWithoutAlt).toBe(0);
  });

  test('page has proper heading hierarchy', async ({ page }) => {
    const h2s = await page.locator('h2').count();
    expect(h2s).toBeGreaterThanOrEqual(5);
  });

  test('no broken internal SVG references', async ({ page }) => {
    const svgImages = page.locator('img[src$=".svg"]');
    const count = await svgImages.count();
    expect(count).toBeGreaterThanOrEqual(4);
    for (let i = 0; i < count; i++) {
      const src = await svgImages.nth(i).getAttribute('src');
      expect(src).toBeTruthy();
      expect(src).not.toContain('undefined');
    }
  });

  test('page renders without console errors', async ({ page }) => {
    const errors = [];
    page.on('pageerror', (err) => errors.push(err.message));
    await page.goto(PREVIEW, { waitUntil: 'load' });
    await page.waitForTimeout(1000);
    expect(errors).toHaveLength(0);
  });

  // ──────────────────────────────────────────
  // SECTION 12 — Visual Regression (Layout)
  // ──────────────────────────────────────────

  test('page renders at desktop width without horizontal scroll', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 20);
  });

  test('page renders at mobile width (375px) without JS errors', async ({ page }) => {
    const errors = [];
    page.on('pageerror', (err) => errors.push(err.message));
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(PREVIEW, { waitUntil: 'load' });
    await page.waitForTimeout(500);
    // GitHub's own CSS handles responsive tables — verify no JS errors at mobile width
    expect(errors).toHaveLength(0);
    // Verify content is still accessible
    const heading = page.locator('text=Latest Launch Bay');
    await expect(heading).toBeVisible();
  });
});
