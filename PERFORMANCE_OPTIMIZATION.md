# 🚀 MagniPay Performance Optimization Guide

*Monitoring, optimization strategies, and best practices for maintaining excellent performance.*

---

## 📊 **Performance Metrics & Targets**

### **Core Web Vitals**

| Metric | Target | Description |
|--------|--------|-------------|
| **Largest Contentful Paint (LCP)** | < 2.5s | Time until largest visual element loads |
| **First Input Delay (FID)** | < 100ms | Response time to user interaction |
| **Cumulative Layout Shift (CLS)** | < 0.1 | Visual stability (no unexpected shifts) |
| **First Contentful Paint (FCP)** | < 1.8s | Time until first content appears |
| **Time to Interactive (TTI)** | < 3.8s | Page becomes fully interactive |

### **Additional Metrics**

| Metric | Target | Description |
|--------|--------|-------------|
| **Page Load Time** | < 3s | Total time to fully load |
| **Bundle Size** | < 200KB | Gzipped JavaScript bundle |
| **CSS Size** | < 50KB | Gzipped CSS stylesheet |
| **Images Total** | < 2MB | All images combined |
| **Lighthouse Score** | ≥ 90 | Google Lighthouse audit score |

---

## 🖼️ **Image Optimization Strategies**

### **1. Format Optimization**

#### **Recommended Formats**
```
PNG → WebP        (30-35% smaller)
JPG → AVIF        (25-30% smaller than WebP)
SVG → Inline      (No HTTP request)
Large JPG → WebP  (50-60% smaller)
```

#### **Implementation (HTML)**
```html
<!-- Modern format with fallback -->
<picture>
  <source srcSet="image.avif" type="image/avif" />
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="description" />
</picture>
```

#### **Implementation (CSS)**
```css
.hero-bg {
  background-image: url("image.webp");
}

@supports not (background-image: url("image.webp")) {
  .hero-bg {
    background-image: url("image.jpg");
  }
}
```

### **2. Responsive Images**

#### **Using srcSet**
```html
<img
  srcSet="
    image-320w.jpg 320w,
    image-640w.jpg 640w,
    image-1280w.jpg 1280w
  "
  sizes="(max-width: 320px) 280px,
         (max-width: 640px) 600px,
         1200px"
  src="image-1280w.jpg"
  alt="description"
/>
```

#### **Using Next.js Image (if applicable)**
```jsx
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="description"
  width={1200}
  height={800}
  responsive
  placeholder="blur"
  blurDataURL="data:image/..."
/>
```

### **3. Lazy Loading**

#### **Native Lazy Loading**
```html
<!-- Don't load until near viewport -->
<img
  src="image.jpg"
  alt="description"
  loading="lazy"
/>
```

#### **React Implementation**
```jsx
import { useEffect, useRef, useState } from 'react';

function LazyImage({ src, alt }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsLoaded(true);
        observer.unobserve(entry.target);
      }
    });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={ref}
      src={isLoaded ? src : 'placeholder.jpg'}
      alt={alt}
      className="transition-opacity duration-300"
    />
  );
}
```

### **4. Image Compression**

#### **Recommended Tools**
- **TinyPNG/TinyJPG**: Web-based compression
- **ImageOptim** (Mac): Batch compression
- **ImageMagick**: Command-line tool
- **FFmpeg**: Video to image conversion

#### **Compression Targets**
```
PNG:   20-50KB per image (< 500px width)
JPG:   15-40KB per image (quality: 75-85%)
WebP:  10-30KB per image (quality: 75-85%)
SVG:   5-20KB per icon (inline when possible)
```

#### **Batch Compression (Command Line)**
```bash
# Compress all PNGs (ImageMagick)
mogrify -quality 85 -strip *.png

# Convert PNG to WebP
cwebp input.png -o output.webp -q 75

# Convert JPG to AVIF
avifenc input.jpg output.avif --quality 75
```

### **5. Current Optimization Opportunities in MagniPay**

#### **Partner Logos (OurPartnersSection)**
```jsx
// ❌ BEFORE: External URLs (slow, no control)
const partners = [
  { name: "SBI", logo: "https://upload.wikimedia.org/..." },
  // ... 13 more
];

// ✅ AFTER: Local SVG files (faster, cached)
import SBILogo from '../assets/logos/sbi.svg';
import HDFCLogo from '../assets/logos/hdfc.svg';
// ... etc

const partners = [
  { name: "SBI", logo: SBILogo },
  { name: "HDFC", logo: HDFCLogo },
];
```

#### **Gallery Images (ImageShowcase)**
```jsx
// ✅ Add responsive images
<picture>
  <source
    srcSet={imagePath.replace('.jpg', '-small.webp')} 
    media="(max-width: 640px)"
    type="image/webp"
  />
  <source
    srcSet={imagePath.replace('.jpg', '.webp')}
    type="image/webp"
  />
  <img
    src={item.image}
    alt={item.title}
    loading="lazy"
  />
</picture>
```

---

## ⚡ **Code Splitting & Lazy Loading**

### **1. Dynamic Imports (React)**

#### **Route-Based Code Splitting**
```jsx
// routes.tsx
const HomePage = lazy(() => import('./pages/Index'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));

export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/blog', element: <BlogPage /> },
];

// App.tsx
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    {routes.map(route => <Route key={route.path} {...route} />)}
  </Routes>
</Suspense>
```

#### **Component-Based Code Splitting**
```jsx
// Lazy load heavy components
const InteractiveGallery = lazy(() =>
  import('./components/InteractiveGallery')
);
const BlogCarousel = lazy(() =>
  import('./components/BlogCarousel')
);

// Use in page
<Suspense fallback={<div className="h-96" />}>
  {showGallery && <InteractiveGallery />}
</Suspense>
```

### **2. Tree Shaking**

#### **Named Imports (Good)**
```jsx
// ✅ Only imports used icons
import { Heart, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
```

#### **Default Imports (Bad)**
```jsx
// ❌ Imports entire icon set
import all from 'lucide-react';
```

### **3. Dependency Analysis**

#### **Check Bundle Size**
```bash
# Install bundlesize analyzer
npm install --save-dev vite-plugin-visualizer

# Generate report
npm run build
npm run analyze
```

---

## 🎬 **Animation Performance**

### **Best Practices**

#### **✅ Good (GPU Accelerated)**
```jsx
// Use transform and opacity (GPU accelerated)
<motion.div
  animate={{
    x: 100,           // ✅ transform
    opacity: 0.5,     // ✅ opacity
    scale: 1.1,       // ✅ transform
  }}
  transition={{ duration: 0.3 }}
/>
```

#### **❌ Bad (CPU Intensive)**
```jsx
// Avoid animating these properties
<motion.div
  animate={{
    width: "100%",    // ❌ Layout shift
    height: "200px",  // ❌ Layout shift
    left: "50px",     // ❌ Layout shift
    color: "#fff",    // ❌ Repaint
  }}
/>
```

### **Blur Effect Optimization**

```jsx
// Current standard with good performance
<div className="blur-[120px] opacity-20">
  {/* Modern browsers handle CSS blur efficiently */}
</div>

// For heavy blur effects, consider:
<div
  className="blur-[120px] opacity-20 will-change-transform"
  style={{ backfaceVisibility: "hidden" }}
>
  {/* will-change hints browser to optimize rendering */}
</div>
```

### **Framer Motion Performance**

```jsx
// ✅ Use viewport for intersection observer (better performance)
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.2 }}
/>

// ❌ Avoid - animates on every render
<motion.div
  animate={{ opacity: 1 }}
  initial={{ opacity: 0 }}
/>
```

---

## 📦 **Bundle Size Analysis**

### **Current Bundle Breakdown (Estimated)**

```
Dependencies:
- React 18.3.1         ~40KB
- Framer Motion        ~50KB
- Tailwind CSS         ~15KB
- @radix-ui/*          ~30KB
- Other libraries      ~40KB
- App code            ~25KB
────────────────────────────
Total (gzipped):       ~200KB
```

### **Optimization Targets**

| Dependency | Current | Target | Strategy |
|------------|---------|--------|----------|
| Framer Motion | 50KB | 45KB | Use only needed animations |
| Radix UI | 30KB | 25KB | Tree-shake unused components |
| Tailwind | 15KB | 12KB | Purge unused utilities |
| Icons | 20KB | 10KB | Use single icon library (lucide-react) |

---

## 🔍 **Performance Monitoring**

### **Tools & Setup**

#### **1. Lighthouse (Built-in DevTools)**
```
Chrome DevTools → Lighthouse → Generate Report
Target: 90+ score
Focus on LCP, CLS, FID improvements
```

#### **2. Web Vitals Monitoring**
```bash
npm install web-vitals
```

```jsx
// main.tsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

#### **3. Continuous Monitoring**
```bash
# Add to package.json
"scripts": {
  "analyze": "npm run build && vite-plugin-visualizer",
  "lighthouse": "lighthouse https://magnipay.com --chrome-flags=\"--headless --no-sandbox\""
}
```

---

## ✅ **Performance Checklist**

### **Images**
- [ ] All images optimized (< 50KB each)
- [ ] Responsive images with srcSet
- [ ] WebP format with fallback
- [ ] Lazy loading enabled
- [ ] Image compression applied

### **JavaScript**
- [ ] Route-based code splitting
- [ ] Tree shaking enabled
- [ ] No unused dependencies
- [ ] Bundle size < 200KB
- [ ] Dynamic imports for heavy components

### **CSS**
- [ ] Unused styles purged
- [ ] CSS < 50KB
- [ ] Minified for production
- [ ] Critical CSS inlined

### **Animations**
- [ ] Only GPU-accelerated properties (transform, opacity)
- [ ] whileInView with once: true
- [ ] Duration ≤ 0.8s
- [ ] No layout-thrashing animations
- [ ] will-change hints on heavy animations

### **Network**
- [ ] Gzip compression enabled
- [ ] DNS prefetch for external resources
- [ ] Resource hints (preload, prefetch)
- [ ] CDN caching configured

### **Monitoring**
- [ ] Lighthouse score ≥ 90
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] FID < 100ms
- [ ] TTI < 3.8s

---

## 🎯 **Action Plan for MagniPay**

### **Phase 1: Quick Wins (This Week)**
- [ ] Compress all images to < 50KB
- [ ] Convert logos to local SVG files
- [ ] Enable native lazy loading
- [ ] Remove unused CSS utilities

### **Phase 2: Optimization (Next Week)**
- [ ] Set up code splitting for pages
- [ ] Implement responsive images
- [ ] Add Web Vitals monitoring
- [ ] Optimize Framer Motion usage

### **Phase 3: Advanced (Month 2)**
- [ ] Convert images to WebP/AVIF
- [ ] Advanced lazy loading with Intersection Observer
- [ ] Service Worker for offline support
- [ ] Image CDN integration

---

## 📚 **Resources**

- [Web.dev - Performance Guide](https://web.dev/performance/)
- [MDN - Web Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)
- [Lighthouse API](https://github.com/GoogleChrome/lighthouse)
- [Vite Performance](https://vitejs.dev/guide/why.html)
- [Framer Motion Performance](https://www.framer.com/motion/)

---

## 📝 **Performance SLA**

**Commitment for MagniPay:**
- Maintain Lighthouse score ≥ 90 on all pages
- Core Web Vitals in "Good" category
- Page load time < 3 seconds on 4G
- Zero layout shifts during page load

**Monitoring Frequency:**
- Weekly automated Lighthouse checks
- Monthly manual performance audit
- Quarterly performance optimization sprints

---

**Last Updated:** March 24, 2026  
**Performance Owner:** DevOps Team  
**Next Review:** April 28, 2026
