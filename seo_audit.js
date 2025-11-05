#!/usr/bin/env node

/**
 * Comprehensive SEO Audit Script
 * Checks multiple SEO factors beyond structured data
 */

const fs = require('fs');
const path = require('path');

const buildPath = path.join(__dirname, 'build', 'index.html');
const html = fs.readFileSync(buildPath, 'utf8');

console.log('🔍 Comprehensive SEO Audit\n');
console.log('='.repeat(70));

const issues = [];
const warnings = [];
const recommendations = [];
const checks = [];

// 1. META TAGS CHECK
console.log('\n📋 1. META TAGS CHECK');
console.log('-'.repeat(70));

const hasTitle = html.includes('<title>');
const hasMetaDescription = /<meta\s+name=["\']description["\']/i.test(html);
const hasCanonical = /<link\s+rel=["\']canonical["\']/i.test(html);
const hasViewport = /<meta\s+name=["\']viewport["\']/i.test(html);
const hasCharset = /<meta\s+charset/i.test(html);
const hasOGTags = /<meta\s+property=["\']og:/i.test(html);
const hasTwitterCard = /<meta\s+name=["\']twitter:/i.test(html);
const hasRobots = /<meta\s+name=["\']robots["\']/i.test(html);

checks.push({ check: 'Title tag', status: hasTitle, critical: true });
checks.push({ check: 'Meta description', status: hasMetaDescription, critical: true });
checks.push({ check: 'Canonical URL', status: hasCanonical, critical: true });
checks.push({ check: 'Viewport meta tag', status: hasViewport, critical: true });
checks.push({ check: 'Charset declaration', status: hasCharset, critical: true });
checks.push({ check: 'Open Graph tags', status: hasOGTags, critical: false });
checks.push({ check: 'Twitter Card tags', status: hasTwitterCard, critical: false });
checks.push({ check: 'Robots meta tag', status: hasRobots, critical: false });

checks.forEach(c => {
  const icon = c.status ? '✅' : (c.critical ? '❌' : '⚠️');
  console.log(`  ${icon} ${c.check}`);
  if (!c.status && c.critical) issues.push(`Missing critical: ${c.check}`);
  if (!c.status && !c.critical) warnings.push(`Missing recommended: ${c.check}`);
});

// Extract and validate title
const titleMatch = html.match(/<title>(.*?)<\/title>/i);
if (titleMatch) {
  const title = titleMatch[1];
  const titleLength = title.length;
  console.log(`  📏 Title length: ${titleLength} characters`);
  if (titleLength < 30) warnings.push('Title too short (recommended: 50-60 characters)');
  if (titleLength > 60) warnings.push('Title too long (recommended: 50-60 characters)');
  if (titleLength >= 30 && titleLength <= 60) {
    console.log('  ✅ Title length is optimal');
  }
}

// Extract and validate meta description
const descMatch = html.match(/<meta\s+name=["\']description["\']\s+content=["\']([^"\']+)["\']/i);
if (descMatch) {
  const desc = descMatch[1];
  const descLength = desc.length;
  console.log(`  📏 Description length: ${descLength} characters`);
  if (descLength < 120) warnings.push('Meta description too short (recommended: 120-160 characters)');
  if (descLength > 160) warnings.push('Meta description too long (recommended: 120-160 characters)');
  if (descLength >= 120 && descLength <= 160) {
    console.log('  ✅ Meta description length is optimal');
  }
}

// 2. HEADING STRUCTURE
console.log('\n📋 2. HEADING STRUCTURE CHECK');
console.log('-'.repeat(70));

// Note: This is a React app, so headings are in JS, not HTML
// We'll check the HTML for any server-rendered headings
const h1Count = (html.match(/<h1[^>]*>/gi) || []).length;
const h2Count = (html.match(/<h2[^>]*>/gi) || []).length;

console.log(`  ℹ️  H1 tags in HTML: ${h1Count}`);
console.log(`  ℹ️  H2 tags in HTML: ${h2Count}`);
console.log('  ⚠️  Note: React app - headings are rendered client-side');
recommendations.push('Verify heading structure in browser: One H1 per page, logical H2-H6 hierarchy');

// 3. IMAGE OPTIMIZATION
console.log('\n📋 3. IMAGE OPTIMIZATION CHECK');
console.log('-'.repeat(70));

const images = html.match(/<img[^>]+>/gi) || [];
const imgTags = html.match(/<img[^>]+>/gi) || [];
let imagesWithAlt = 0;
let imagesWithSrcset = 0;
let webpImages = 0;

imgTags.forEach(img => {
  if (/alt=["\']([^"\']+)["\']/i.test(img)) imagesWithAlt++;
  if (/srcset=/i.test(img)) imagesWithSrcset++;
  if (/\.webp/i.test(img)) webpImages++;
});

console.log(`  📊 Total images: ${imgTags.length}`);
console.log(`  ✅ Images with alt text: ${imagesWithAlt}/${imgTags.length}`);
console.log(`  ✅ Images with srcset: ${imagesWithSrcset}/${imgTags.length}`);
console.log(`  ✅ WebP images: ${webpImages}/${imgTags.length}`);

if (imagesWithAlt < imgTags.length) {
  warnings.push(`${imgTags.length - imagesWithAlt} images missing alt text`);
}

// Check preload tags
const preloadImages = (html.match(/<link\s+rel=["\']preload["\'][^>]*as=["\']image["\']/gi) || []).length;
console.log(`  ✅ Image preload tags: ${preloadImages}`);

// 4. PERFORMANCE HINTS
console.log('\n📋 4. PERFORMANCE OPTIMIZATION CHECK');
console.log('-'.repeat(70));

const hasPreconnect = /<link\s+rel=["\']preconnect["\']/i.test(html);
const hasDnsPrefetch = /<link\s+rel=["\']dns-prefetch["\']/i.test(html);
const hasPreload = /<link\s+rel=["\']preload["\']/i.test(html);
const hasDeferScripts = /<script[^>]+defer/gi.test(html);

console.log(hasPreconnect ? '  ✅ Preconnect tags' : '  ⚠️  No preconnect tags');
console.log(hasDnsPrefetch ? '  ✅ DNS prefetch tags' : '  ⚠️  No DNS prefetch tags');
console.log(hasPreload ? '  ✅ Preload tags' : '  ⚠️  No preload tags');
console.log(hasDeferScripts ? '  ✅ Deferred scripts' : '  ⚠️  No deferred scripts');

if (!hasPreconnect) recommendations.push('Add preconnect tags for external domains (fonts, analytics)');
if (!hasPreload) recommendations.push('Add preload tags for critical above-the-fold images');

// 5. ACCESSIBILITY
console.log('\n📋 5. ACCESSIBILITY CHECK');
console.log('-'.repeat(70));

const hasLang = /<html[^>]+lang=["\']/i.test(html);
const hasNoscript = /<noscript>/i.test(html);

console.log(hasLang ? '  ✅ HTML lang attribute' : '  ❌ Missing HTML lang attribute');
console.log(hasNoscript ? '  ✅ Noscript tag' : '  ⚠️  No noscript tag');

if (!hasLang) issues.push('Missing HTML lang attribute');

// 6. SECURITY HEADERS
console.log('\n📋 6. SECURITY HEADERS CHECK');
console.log('-'.repeat(70));

const hasXContentType = /<meta\s+http-equiv=["\']X-Content-Type-Options["\']/i.test(html);
const hasXFrameOptions = /<meta\s+http-equiv=["\']X-Frame-Options["\']/i.test(html);
const hasXSSProtection = /<meta\s+http-equiv=["\']X-XSS-Protection["\']/i.test(html);

console.log(hasXContentType ? '  ✅ X-Content-Type-Options' : '  ⚠️  Missing X-Content-Type-Options');
console.log(hasXFrameOptions ? '  ✅ X-Frame-Options' : '  ⚠️  Missing X-Frame-Options');
console.log(hasXSSProtection ? '  ✅ X-XSS-Protection' : '  ⚠️  Missing X-XSS-Protection');

// 7. URL STRUCTURE
console.log('\n📋 7. URL STRUCTURE CHECK');
console.log('-'.repeat(70));

const canonicalMatch = html.match(/<link\s+rel=["\']canonical["\']\s+href=["\']([^"\']+)["\']/i);
if (canonicalMatch) {
  const url = canonicalMatch[1];
  console.log(`  ✅ Canonical URL: ${url}`);
  
  // Check for www
  if (url.includes('www.')) {
    console.log('  ✅ Uses www subdomain (consistent)');
  } else {
    warnings.push('Canonical URL does not use www - ensure consistency');
  }
  
  // Check for HTTPS
  if (url.startsWith('https://')) {
    console.log('  ✅ Uses HTTPS');
  } else {
    issues.push('Canonical URL should use HTTPS');
  }
  
  // Check for trailing slash
  if (url.endsWith('/')) {
    console.log('  ✅ Trailing slash (consistent)');
  }
}

// 8. SITEMAP & ROBOTS
console.log('\n📋 8. SITEMAP & ROBOTS CHECK');
console.log('-'.repeat(70));

const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
const robotsPath = path.join(__dirname, 'public', 'robots.txt');

if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const urlCount = (sitemap.match(/<url>/g) || []).length;
  console.log(`  ✅ Sitemap.xml exists with ${urlCount} URLs`);
  
  // Check if sitemap references in robots.txt
  if (fs.existsSync(robotsPath)) {
    const robots = fs.readFileSync(robotsPath, 'utf8');
    if (robots.includes('sitemap.xml')) {
      console.log('  ✅ Sitemap referenced in robots.txt');
    } else {
      warnings.push('Sitemap not referenced in robots.txt');
    }
  }
} else {
  warnings.push('Sitemap.xml not found in public folder');
}

if (fs.existsSync(robotsPath)) {
  console.log('  ✅ Robots.txt exists');
} else {
  warnings.push('Robots.txt not found');
}

// 9. STRUCTURED DATA COUNT
console.log('\n📋 9. STRUCTURED DATA CHECK');
console.log('-'.repeat(70));

const jsonLdCount = (html.match(/<script\s+type=["\']application\/ld\+json["\']>/gi) || []).length;
console.log(`  ✅ JSON-LD schemas: ${jsonLdCount}`);

// Check for common schema types
const schemaTypes = ['LocalBusiness', 'Organization', 'FAQPage', 'BreadcrumbList', 'PetService'];
schemaTypes.forEach(type => {
  if (html.includes(`"@type": "${type}"`)) {
    console.log(`  ✅ ${type} schema present`);
  }
});

// 10. SOCIAL MEDIA TAGS
console.log('\n📋 10. SOCIAL MEDIA TAGS CHECK');
console.log('-'.repeat(70));

const ogImage = html.match(/<meta\s+property=["\']og:image["\'][^>]+content=["\']([^"\']+)["\']/i);
const ogTitle = html.match(/<meta\s+property=["\']og:title["\'][^>]+content=["\']([^"\']+)["\']/i);
const ogDescription = html.match(/<meta\s+property=["\']og:description["\'][^>]+content=["\']([^"\']+)["\']/i);
const twitterImage = html.match(/<meta\s+name=["\']twitter:image["\'][^>]+content=["\']([^"\']+)["\']/i);

console.log(ogImage ? `  ✅ Open Graph image: ${ogImage[1].substring(0, 50)}...` : '  ⚠️  Missing og:image');
console.log(ogTitle ? '  ✅ Open Graph title' : '  ⚠️  Missing og:title');
console.log(ogDescription ? '  ✅ Open Graph description' : '  ⚠️  Missing og:description');
console.log(twitterImage ? `  ✅ Twitter image: ${twitterImage[1].substring(0, 50)}...` : '  ⚠️  Missing twitter:image');

// 11. ANALYTICS
console.log('\n📋 11. ANALYTICS CHECK');
console.log('-'.repeat(70));

const hasGA = /gtag|google-analytics|googletagmanager/i.test(html);
console.log(hasGA ? '  ✅ Google Analytics detected' : '  ⚠️  Google Analytics not found');

if (hasGA) {
  const gaId = html.match(/gtag\(["\']config["\'],\s*["\']([^"\']+)["\']/);
  if (gaId && gaId[1] && !gaId[1].includes('REACT_APP')) {
    console.log(`  ✅ GA ID: ${gaId[1]}`);
  } else {
    warnings.push('Google Analytics ID may be placeholder');
  }
}

// 12. MOBILE OPTIMIZATION
console.log('\n📋 12. MOBILE OPTIMIZATION CHECK');
console.log('-'.repeat(70));

const viewportMatch = html.match(/<meta\s+name=["\']viewport["\'][^>]+content=["\']([^"\']+)["\']/i);
if (viewportMatch) {
  const viewport = viewportMatch[1];
  console.log(`  ✅ Viewport: ${viewport}`);
  if (viewport.includes('width=device-width') && viewport.includes('initial-scale=1')) {
    console.log('  ✅ Mobile-friendly viewport configuration');
  } else {
    warnings.push('Viewport may not be optimized for mobile');
  }
}

// Check for responsive images
if (imagesWithSrcset > 0) {
  console.log('  ✅ Responsive images (srcset) detected');
} else {
  recommendations.push('Consider adding responsive images with srcset for better mobile performance');
}

// SUMMARY
console.log('\n' + '='.repeat(70));
console.log('📊 SEO AUDIT SUMMARY');
console.log('='.repeat(70));

const criticalChecks = checks.filter(c => c.critical);
const passedCritical = criticalChecks.filter(c => c.status).length;
const totalCritical = criticalChecks.length;

console.log(`\n✅ Critical checks passed: ${passedCritical}/${totalCritical}`);
console.log(`⚠️  Warnings: ${warnings.length}`);
console.log(`❌ Issues: ${issues.length}`);
console.log(`💡 Recommendations: ${recommendations.length}`);

if (issues.length > 0) {
  console.log('\n❌ CRITICAL ISSUES:');
  issues.forEach(issue => console.log(`   • ${issue}`));
}

if (warnings.length > 0) {
  console.log('\n⚠️  WARNINGS:');
  warnings.forEach(warning => console.log(`   • ${warning}`));
}

if (recommendations.length > 0) {
  console.log('\n💡 RECOMMENDATIONS:');
  recommendations.forEach(rec => console.log(`   • ${rec}`));
}

// ADDITIONAL MANUAL CHECKS
console.log('\n' + '='.repeat(70));
console.log('📝 ADDITIONAL MANUAL CHECKS TO PERFORM:');
console.log('='.repeat(70));
console.log('1. ✅ Google PageSpeed Insights: https://pagespeed.web.dev/');
console.log('2. ✅ Google Search Console: Submit sitemap and monitor');
console.log('3. ✅ Mobile-Friendly Test: https://search.google.com/test/mobile-friendly');
console.log('4. ✅ Rich Results Test: https://search.google.com/test/rich-results');
console.log('5. ✅ Schema Validator: https://validator.schema.org/');
console.log('6. ✅ Lighthouse Audit: Run in Chrome DevTools');
console.log('7. ✅ Check for broken links (use online tools)');
console.log('8. ✅ Verify SSL certificate is active');
console.log('9. ✅ Test social media sharing (Facebook Debugger, Twitter Card Validator)');
console.log('10. ✅ Monitor Core Web Vitals in Search Console\n');

const score = Math.round(((passedCritical / totalCritical) * 40) + ((checks.length - warnings.length - issues.length) / checks.length * 60));
console.log(`\n📊 Estimated SEO Score: ${score}/100\n`);

process.exit(issues.length > 0 ? 1 : 0);

