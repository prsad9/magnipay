# MagniPay Design System v1.0

*A comprehensive guide to MagniPay's visual design language, component patterns, and implementation standards.*

---

## 📐 **Design Principles**

### **1. Clarity**
- Clean, minimal interfaces that guide users naturally
- Clear visual hierarchy through size, color, and spacing
- Meaningful animations that support, not distract

### **2. Accessibility**
- WCAG 2.1 AA compliant
- High contrast ratios (4.5:1 minimum for text)
- Keyboard navigation support
- Semantic HTML structure

### **3. Performance**
- Mobile-first design approach
- Optimized animations (60fps)
- Fast load times
- Progressive enhancement

### **4. Consistency**
- Unified spacing system across all sections
- Standardized component patterns
- Coherent color usage
- Consistent typography scale

---

## 🎨 **Color System**

### **Primary Colors**
```
Primary Blue:    #2563EB (hsl(217 91% 60%))
Secondary Purple: #7C3AED (hsl(263 70% 58%))
Accent Cyan:     #06B6D4 (hsl(187 92% 53%))
```

### **Semantic Colors**
```
Success:   #10B981 (Emerald)
Warning:   #F59E0B (Amber)
Error:     #EF4444 (Red)
Info:      #3B82F6 (Blue)
```

### **Neutral Colors**
```
Background:      #FFFFFF (light) / #0A0A0A (dark)
Surface:         #F9FAFB (light) / #1A1A1A (dark)
Muted:           #6B7280
Foreground:      #1F2937 (light) / #F3F4F6 (dark)
Border:          #E5E7EB (light) / #374151 (dark)
```

---

## 📏 **Spacing System**

### **Vertical Spacing (Margin/Padding)**
```
xs:  4px   (0.25rem)
sm:  8px   (0.5rem)
md:  16px  (1rem)
lg:  24px  (1.5rem)
xl:  32px  (2rem)
2xl: 48px  (3rem)
3xl: 64px  (4rem)
4xl: 96px  (6rem)
```

### **Section Spacing (Padding)**
```
Mobile:    py-20  (80px vertical)
Tablet:    py-28  (112px vertical)
Desktop:   py-36  (144px vertical)
```

### **Container Padding**
```
Mobile:    px-4   (1rem horizontal)
Tablet:    px-6   (1.5rem horizontal)
Desktop:   px-8   (2rem horizontal)
```

### **Grid Gaps**
```
Mobile:    gap-6  (24px)
Tablet:    gap-8  (32px)
Desktop:   gap-12 (48px)
```

### **Component Padding (Cards)**
```
Mobile:    p-5   (20px)
Tablet:    p-8   (32px)
Desktop:   p-10  (40px)
```

### **Header Bottom Margin**
```
All: mb-16 (64px) - Consistent spacing below section headers
```

---

## 🔤 **Typography System**

### **Font Stack**
```
Display:  font-display (custom serif for headings)
Body:     system-ui, -apple-system, sans-serif
Mono:     monospace (for code)
```

### **Type Scale**

| Role | Mobile | Tablet | Desktop | Line Height | Letter Spacing |
|------|--------|--------|---------|-------------|----------------|
| H1 (Hero) | 24px | 32px | 48px | 1.1 | -0.02em |
| H2 (Section) | 28px | 36px | 48px | 1.2 | -0.01em |
| H3 (Subsection) | 20px | 24px | 32px | 1.3 | 0 |
| H4 (Card Title) | 18px | 20px | 24px | 1.4 | 0 |
| Body Large | 18px | 20px | 20px | 1.6 | 0 |
| Body | 16px | 16px | 16px | 1.6 | 0 |
| Body Small | 14px | 14px | 14px | 1.5 | 0.01em |
| Caption | 12px | 12px | 12px | 1.5 | 0.02em |

### **Font Weights**
```
Regular:  400
Medium:   500
Semibold: 600
Bold:     700
```

---

## 🎬 **Animation System**

### **Standard Easing**
```
Custom Easing: [0.16, 1, 0.3, 1]
Smooth Easing: [0.25, 0.46, 0.45, 0.94]
```

### **Duration Standards**
```
Quick:    0.3s  - Fast state changes (hover, focus)
Standard: 0.6s  - Fade-ins, slides
Slow:     0.8s  - Large content animations
Delay:    0.1s  - Stagger between items (×index)
```

### **Animation Effects**

#### **Fade In**
```javascript
initial={{ opacity: 0, filter: "blur(6px)" }}
animate={{ opacity: 1, filter: "blur(0)" }}
transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
```

#### **Slide In (Top)**
```javascript
initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
```

#### **Slide In (Left)**
```javascript
initial={{ opacity: 0, x: -24, filter: "blur(6px)" }}
animate={{ opacity: 1, x: 0, filter: "blur(0)" }}
transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
```

#### **Slide In (Right)**
```javascript
initial={{ opacity: 0, x: 24, filter: "blur(6px)" }}
animate={{ opacity: 1, x: 0, filter: "blur(0)" }}
transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
```

#### **Stagger Children**
```javascript
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.6, delay: index * 0.1 }}
```

### **Hover Effects**
```
Scale:         scale-105 (5% increase)
Lift:          y: -4 (4px up)
Shadow:        shadow-[0_0_20px_rgba(37,99,235,0.3)]
Duration:      200ms - 300ms
```

---

## 🎨 **Background Effects**

### **Gradient Orbs (Standard)**
```
Top Gradient:
- Position:     top-0 left-0 (or top-0 right-0)
- Size:         w-[600px] h-[600px]
- Blur:         blur-[120px]
- Opacity:      opacity-20
- Gradient:     linear-gradient(135deg, #2563EB, #7C3AED)

Bottom Gradient:
- Position:     bottom-0 right-0 (or bottom-0 left-0)
- Size:         w-[500px] h-[500px]
- Blur:         blur-[120px]
- Opacity:      opacity-15
- Gradient:     linear-gradient(135deg, #7C3AED, #2563EB)
```

### **Grid Pattern (Optional)**
```className
opacity-[0.02]
backgroundImage: linear-gradient(...)
backgroundSize: 80px 80px
```

---

## 📱 **Responsive Breakpoints**

```
Mobile:        < 640px    (default, phone)
Tablet:        640px+     (sm: prefix)
Desktop:       1024px+    (lg: prefix)
Large Desktop: 1280px+    (xl: prefix)
```

### **Responsive Scaling Example**
```
Mobile:  text-base  → Tablet: sm:text-lg  → Desktop: lg:text-xl
Mobile:  gap-4      → Tablet: sm:gap-6    → Desktop: lg:gap-8
Mobile:  p-4        → Tablet: sm:p-6      → Desktop: lg:p-8
```

---

## 🧩 **Component Patterns**

### **Section Header (Standard)**
```
<motion.div
  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
  whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
  className="text-center max-w-3xl mx-auto mb-16"
>
  <div className="inline-flex items-center gap-2 px-4 py-1.5 capsule bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
    Badge Label
  </div>
  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
    Heading with <span className="text-gradient">Gradient</span>
  </h2>
  <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg lg:text-xl">
    Supporting description text
  </p>
</motion.div>
```

### **Card Component (neon-card)**
```
<motion.div
  className="neon-card p-5 sm:p-8 lg:p-10 group"
  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
  whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, delay: i * 0.1 }}
>
  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary to-accent mb-4">
    <IconComponent size={24} className="text-white" />
  </div>
  <h3 className="font-display font-bold text-lg mb-2">Title</h3>
  <p className="text-muted-foreground text-sm">Description</p>
</motion.div>
```

### **Feature Grid**
```
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
  {items.map((item, i) => (
    <Card key={i} item={item} delay={i * 0.1} />
  ))}
</div>
```

---

## 🎯 **Best Practices**

### **Accessibility**
- ✅ Use semantic HTML (`<button>`, `<nav>`, `<section>`)
- ✅ Include `aria-labels` on interactive elements
- ✅ Ensure color contrast ratio ≥ 4.5:1 for text
- ✅ Support keyboard navigation
- ✅ Focus visible on interactive elements

### **Performance**
- ✅ Use `once: true` for Framer Motion viewport observers (animate only once)
- ✅ Lazy load images and components
- ✅ Optimize images (WebP, compressed)
- ✅ Minimize blur effects on mobile
- ✅ Use CSS Grid over Flexbox when appropriate

### **Responsive Design**
- ✅ Mobile-first approach (design for mobile, scale up)
- ✅ Test on actual devices, not just browser DevTools
- ✅ Check touch targets are ≥ 44px on mobile
- ✅ Stack content vertically on mobile
- ✅ Use sm: and lg: prefixes only (skip md:)

### **Animation**
- ✅ Animate on view (whileInView, not on mount)
- ✅ Use consistent easing across all animations
- ✅ Keep duration ≤ 0.8s (faster feels better)
- ✅ Stagger items with index * 0.1 delay
- ✅ Respect `prefers-reduced-motion` setting

### **Code Quality**
- ✅ Use TypeScript for type safety
- ✅ Extract reusable components
- ✅ Follow naming conventions
- ✅ Comment complex logic
- ✅ Keep components under 300 lines

---

## 📊 **MagniPay Brand Colors (Extended)**

### **Gradients**
```
Primary Gradient:   from-primary to-secondary
Accent Gradient:    from-accent to-secondary
Reverse Gradient:   from-secondary to-primary
Warm Gradient:      from-orange-500 to-red-500
Cool Gradient:      from-blue-500 to-cyan-600
Success Gradient:   from-green-500 to-emerald-600
Warning Gradient:   from-yellow-500 to-orange-600
Error Gradient:     from-red-500 to-rose-600
```

---

## 🚀 **Implementation Checklist**

When creating a new section:

- [ ] Use standard section padding: `py-20 sm:py-28 lg:py-36`
- [ ] Center section header: `text-center max-w-3xl mx-auto mb-16`
- [ ] Add gradient orbs: top `blur-[120px] opacity-20`, bottom `opacity-15`
- [ ] Use container: `<div className="container relative z-10">`
- [ ] Animate on view: `whileInView={{ opacity: 1, y: 0 }}`
- [ ] Stagger items: `delay: i * 0.1`
- [ ] Responsive spacing: `gap-6 sm:gap-8 lg:gap-12`
- [ ] Card padding: `p-5 sm:p-8 lg:p-10`
- [ ] Test on mobile, tablet, desktop
- [ ] Check accessibility with WAVE or Axe
- [ ] Verify performance with Lighthouse

---

## 📝 **Changelog**

### **v1.0 - March 2026**
- Initial design system documentation
- Unified spacing across all sections
- Standardized animations
- Consistent background effects
- Responsive breakpoint guidelines
- Color system standardization
- Typography scale definition

---

## 👥 **Questions?**

For design system questions, reach out to the design team or check the component library in Storybook.

**Last Updated:** March 24, 2026  
**Maintained By:** Design System Team  
**Version:** 1.0
