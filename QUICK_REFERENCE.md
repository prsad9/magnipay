# 🚀 MagniPay Quick Reference Card

*Fast lookup for common questions, configurations, and quick wins.*

---

## ❓ **Quick Questions**

### **Where is X configured?**

```
Design System Colors    → DESIGN_SYSTEM.md → Color System section
Animation Easing        → src/lib/animations.ts → STANDARD_EASING
Email Credentials       → .env.local → VITE_EMAILJS_PUBLIC_KEY
Spacing System          → DESIGN_SYSTEM.md → Spacing System section
Component Patterns      → DESIGN_SYSTEM.md → Component Patterns section
```

### **How do I...?**

```
Add a new section?
  1. Create new component in src/components/[SectionName].tsx
  2. Use spacing: py-20 sm:py-28 lg:py-36
  3. Add gradient orbs to background (see DESIGN_SYSTEM.md)
  4. Center header: text-center max-w-3xl mx-auto mb-16
  5. Import in src/pages/Index.tsx

Create an animated card?
  1. Import: import { PRESET_GRID_CARD } from '@/lib/animations';
  2. Use: <motion.div {...PRESET_GRID_CARD(index)} className="neon-card p-5 sm:p-8 lg:p-10">
  3. Add content inside

Test responsiveness?
  1. Open DevTools: F12 or Cmd+Option+I
  2. Toggle device mode: Ctrl+Shift+M (or Cmd+Shift+M on Mac)
  3. Test at: 375px, 810px, 1440px
  4. Check spacing and layout

Optimize an image?
  1. Reduce size: < 50KB for card images
  2. Use WebP format instead of PNG/JPG
  3. Add loading="lazy" to img tags
  4. Or use: <picture> with srcSet attribute

Reduce bundle size?
  1. Remove unused imports (ESLint will warn)
  2. Use named imports, not default imports
  3. Add dynamic imports: const Component = lazy(() => import('...'))
  4. Tree-shake unused code with TypeScript

Fix accessibility?
  1. Add alt text to all images
  2. Add aria-label to icon buttons
  3. Ensure 4.5:1 color contrast
  4. Test with keyboard navigation
```

---

## 📋 **Most-Used Commands**

```bash
# Development
npm run dev              # Start dev server (http://localhost:5173)
npm run build          # Build for production
npm run preview         # Preview production build locally

# Testing & Quality
npm run test           # Run unit tests
npm run lint           # Check code quality
npm run format         # Format code with Prettier

# Git
git add .              # Stage all changes
git commit -m "msg"    # Commit changes
git push               # Push to remote

# Common npm commands
npm install [package]  # Install a package
npm update            # Update packages
npm outdated          # Check for outdated packages
```

---

## 🎨 **Copy-Paste Snippets**

### **New Section Component**
```typescript
'use client';
import { motion } from 'framer-motion';
import { PRESET_SECTION_HEADER, PRESET_GRID_CARD } from '@/lib/animations';

const NewSection = () => {
  const items = [
    { title: 'Item 1', description: 'Description' },
    { title: 'Item 2', description: 'Description' },
  ];

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #7C3AED, #2563EB)' }} />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div {...PRESET_SECTION_HEADER} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Section Title</h2>
          <p className="text-muted-foreground mt-4">Description text</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {items.map((item, i) => (
            <motion.div key={i} {...PRESET_GRID_CARD(i)} className="neon-card p-5 sm:p-8 lg:p-10 group">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewSection;
```

### **Responsive Image**
```jsx
<picture>
  <source srcSet="/image-small.webp" media="(max-width: 640px)" type="image/webp" />
  <source srcSet="/image.webp" type="image/webp" />
  <img src="/image.jpg" alt="description" className="w-full" loading="lazy" />
</picture>
```

### **Form Input with Validation**
```jsx
const [value, setValue] = useState('');
const [error, setError] = useState('');

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const val = e.target.value;
  setValue(val);
  if (val.length < 2) {
    setError('Minimum 2 characters');
  } else {
    setError('');
  }
};

<div>
  <input value={value} onChange={handleChange} />
  {error && <span className="text-red-500 text-sm">{error}</span>}
</div>
```

### **Animation on Scroll**
```jsx
<motion.div
  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
  whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>
  Fades in when scrolled to view
</motion.div>
```

---

## 🐛 **Common Issues & Fixes**

### **Issue: Form not sending emails**
```
Cause: Wrong EmailJS credentials in .env.local
Fix:
  1. Check .env.local has correct VITE_EMAILJS_*
  2. Verify credentials match EmailJS account
  3. Check template variables: {{from_name}}, {{from_email}}, {{message}}
  4. Test in browser console: console.log(import.meta.env)
```

### **Issue: Layout shift on mobile**
```
Cause: Padding or width misalignment at breakpoint
Fix:
  1. Check padding: use p-5 sm:p-8 lg:p-10 pattern
  2. Check width: use w-full or max-w-full
  3. Test at exact breakpoints: 375px, 640px, 1024px
  4. Check for absolute positioned elements
```

### **Issue: Animation janky/stuttering**
```
Cause: Animating non-GPU properties or too many items
Fix:
  1. Only animate: opacity, transform (x, y, scale, rotate)
  2. Reduce blur effect amount
  3. Use will-change CSS hint
  4. Check: once: true in viewport observer
```

### **Issue: Images slow to load**
```
Cause: Large uncompressed images
Fix:
  1. Compress images: < 50KB each
  2. Use WebP format
  3. Add loading="lazy" attribute
  4. Implement responsive images with srcSet
  5. Consider CDN for serving images
```

### **Issue: Bundle size too large**
```
Cause: Unused dependencies or bad imports
Fix:
  1. Remove console.log statements
  2. Use named imports: import { Button } from '...'
  3. Check for unused CSS utilities
  4. Run: npm run build && npm run analyze
  5. Remove unused node_modules
```

---

## 🔑 **Important Files Map**

```
src/
├── components/
│   ├── ContactSection.tsx          → Form with EmailJS
│   ├── CashbackRewardsSection.tsx  → New rewards section
│   ├── OurPartnersSection.tsx      → Partner logos
│   └── [Section].tsx               → All other sections
├── lib/
│   ├── animations.ts               → 🔥 Animation library (use this!)
│   └── utils.ts                    → Helper functions
├── pages/
│   └── Index.tsx                   → Main page (import sections here)
└── App.tsx                         → Router setup

Configuration:
├── .env.local                      → EmailJS credentials
├── tailwind.config.ts              → Tailwind config
├── tsconfig.json                   → TypeScript config
└── vite.config.ts                  → Vite config

Documentation:
├── DESIGN_SYSTEM.md                → 📐 Design reference
├── PERFORMANCE_OPTIMIZATION.md     → 🚀 Performance guide
├── RESPONSIVE_DESIGN_GUIDE.md      → 📱 Testing guide
├── CODE_QUALITY_GUIDE.md           → 💎 Standards guide
└── PROJECT_COMPLETION_SUMMARY.md   → ✨ Overview
```

---

## 🎨 **Design Tokens Quick Reference**

```
COLORS:
  Primary:    #2563EB    (--primary)
  Secondary:  #7C3AED    (--secondary)
  Accent:     #06B6D4    (--accent)

SPACING (Stack these):
  Mobile:     py-20      (80px)
  Tablet:     sm:py-28   (112px)
  Desktop:    lg:py-36   (144px)

CARDS:
  Padding:    p-5 sm:p-8 lg:p-10
  Class:      neon-card
  Shadow:     shadow-lg

GAPS:
  Grid:       gap-6 sm:gap-8 lg:gap-12
  Flex:       gap-4 sm:gap-6

TEXT:
  Heading:    font-bold tracking-tight
  Body:       text-base leading-relaxed
  Muted:      text-muted-foreground

ANIMATIONS:
  Duration:   0.6s (standard), 0.3s (quick), 0.8s (slow)
  Easing:     [0.16, 1, 0.3, 1] (standard)
  Blur:       blur-[120px] with opacity-20/15
```

---

## 📞 **When You Need Help**

```
Design Questions?
  → Check: DESIGN_SYSTEM.md
  → Or: Run site locally and inspect with DevTools

Performance Issues?
  → Check: PERFORMANCE_OPTIMIZATION.md
  → Run: Lighthouse audit (DevTools Ctrl+Shift+I)

Responsive Issues?
  → Check: RESPONSIVE_DESIGN_GUIDE.md
  → Test: At 375px, 810px, 1440px

Code Quality?
  → Check: CODE_QUALITY_GUIDE.md
  → Run: npm run lint

Animation Stuck?
  → Check: src/lib/animations.ts
  → Or: Use PRESET_* constants from animations.ts

Email Not Working?
  → Check: .env.local has credentials
  → Or: Check EMAILJS_SETUP_GUIDE.md
```

---

## ⚡ **Speed Tips**

```
To speed up development:
  1. Use npm run dev (hot reload)
  2. Use Component snippets (copy-paste patterns)
  3. Use animation presets (don't create custom animations)
  4. Copy existing sections and modify
  5. Use Chrome DevTools Cmd+Shift+M for mobile testing

To manage code quality:
  1. Install ESLint extension in VS Code
  2. Enable "Format on Save" in settings
  3. Use git commit message template: "type: description"
  4. Run npm run lint before committing
```

---

## 🎯 **Deployment Checklist**

```
Before deploying to production:
  [ ] All tests passing: npm run test
  [ ] Linting clean: npm run lint
  [ ] Build succeeds: npm run build
  [ ] Lighthouse score ≥ 90
  [ ] No console errors in production build
  [ ] EmailJS credentials configured
  [ ] Environment variables set
  [ ] Responsive tested (375px, 1440px)
  [ ] Forms tested on real device
  [ ] Team reviewed code
```

---

## 📊 **Performance Benchmarks**

```
Target Metrics:
  Lighthouse Score:    ≥ 90
  Bundle Size:         < 200KB (gzipped)
  First Paint:         < 1.8s
  Largest Paint:       < 2.5s
  Time to Interactive: < 3.8s
  Layout Shift:        < 0.1

How to check:
  1. Run: npm run build
  2. Open DevTools → Lighthouse
  3. Click "Generate report"
  4. Check metrics
```

---

**Last Updated:** March 24, 2026  
**Quick Lookup:** Ctrl+F to search this file  
**Print-Friendly:** Yes! Print this as a desk reference
