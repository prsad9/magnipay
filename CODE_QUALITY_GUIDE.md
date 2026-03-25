# 💎 Code Quality & Best Practices Guide

*Standards and conventions for maintaining high-quality, maintainable code in MagniPay.*

---

## 🎯 **Core Principles**

1. **Readability First** - Code is read more often than written
2. **DRY (Don't Repeat Yourself)** - Avoid duplication
3. **SOLID Principles** - Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion
4. **Performance Conscious** - Optimize without over-engineering
5. **Accessible by Default** - Include WCAG compliance from the start
6. **Type Safe** - Use TypeScript fully, avoid `any`

---

## 📝 **TypeScript Standards**

### **✅ Best Practices**

#### **1. Strong Typing (No `any`)**
```typescript
// ❌ BAD - Using 'any'
const handleChange = (e: any) => {
  setValue(e.target.value);
};

// ✅ GOOD - Proper typing
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};
```

#### **2. Interface Over Type for Objects**
```typescript
// ❌ Type alias for objects
type User = {
  id: number;
  name: string;
};

// ✅ Interface for objects (extensible)
interface User {
  id: number;
  name: string;
}

// ✅ Type for unions/primitives
type Status = 'pending' | 'completed' | 'failed';
```

#### **3. Type Imports**
```typescript
// ✅ Separate type imports (for tree-shaking)
import type { User, Product } from './types';
import { getUserData, getProducts } from './api';
```

#### **4. Strict Mode Enabled**
```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,              // Enable all strict checks
    "noImplicitAny": true,       // No implicit any
    "strictNullChecks": true,    // Null/undefined checks
    "strictFunctionTypes": true, // Function type checking
    "noUnusedLocals": true,      // Warn unused variables
    "noImplicitReturns": true    // All code paths return
  }
}
```

---

## ⚛️ **React Standards**

### **Component Structure**

#### **✅ Correct Component Pattern**
```typescript
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { PRESET_GRID_CARD } from '@/lib/animations';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index?: number;
}

/**
 * Card - Reusable card component
 * @param title - Card heading
 * @param description - Card description text
 * @param icon - Icon element
 * @param index - Stagger index for animation
 */
const Card: FC<CardProps> = ({
  title,
  description,
  icon,
  index = 0
}) => {
  return (
    <motion.div
      {...PRESET_GRID_CARD(index)}
      className="neon-card p-5 sm:p-8 lg:p-10 group"
    >
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  );
};

export default Card;
```

### **Hooks Standards**

#### **✅ Custom Hooks Pattern**
```typescript
// hooks/useCustomAnalytics.ts
import { useEffect } from 'react';

interface AnalyticsEvent {
  event: string;
  properties?: Record<string, unknown>;
}

use useCustomAnalytics = () => {
  const trackEvent = (data: AnalyticsEvent) => {
    // Analytics implementation
  };

  const trackPageView = (path: string) => {
    // Page tracking
  };

  return { trackEvent, trackPageView };
};

export default useCustomAnalytics;
```

#### **❌ Avoid Side Effects in Renders**
```typescript
// ❌ BAD
const Component = () => {
  const [count, setCount] = useState(0);
  
  // This runs on every render!
  console.log('Component rendered');
  fetchData();
  
  return <div>{count}</div>;
};

// ✅ GOOD
const Component = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This runs once on mount
    fetchData();
  }, []);

  return <div>{count}</div>;
};
```

---

## 🎬 **Animation Standards**

### **Use Animation Library**
```typescript
// ✅ GOOD - Use utility from animations.ts
import { PRESET_GRID_CARD, DURATIONS, STANDARD_EASING } from '@/lib/animations';

<motion.div {...PRESET_GRID_CARD(index)} >
  {/* Content */}
</motion.div>

// ❌ BAD - Inline animation configs everywhere
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>
  {/* Content */}
</motion.div>
```

### **Animation Rules**
```typescript
// ✅ Use whileInView for on-scroll animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  // ✅ Only GPU-accelerated properties
  // allowed: transform (x, y, rotate, scale), opacity, filter
/>

// ❌ Avoid layout-shifting animations
<motion.div
  animate={{ width: '100%' }}  // ❌ Width change = layout shift
  animate={{ height: 200 }}    // ❌ Height change = layout shift
  animate={{ left: 50 }}       // ❌ Positional change = layout shift
/>
```

---

## 📐 **Component Organization**

### **File Structure**
```
src/
├── components/
│   ├── ui/                 # Base UI components (from Radix UI)
│   ├── [Section].tsx       # Page sections
│   ├── [Component].tsx     # Reusable components
│   └── Form.tsx
├── pages/                  # Page components
├── hooks/                  # Custom React hooks
├── lib/
│   ├── animations.ts       # Animation utilities
│   ├── utils.ts           # Helper functions
│   └── api.ts             # API calls
├── types/                  # TypeScript interfaces
├── assets/                 # Images, icons, fonts
└── styles/                # Global CSS
```

### **Naming Conventions**

```typescript
// Components: PascalCase
export const HeroSection: FC = () => { /* ... */ };
export const ContactForm: FC = () => { /* ... */ };

// Functions: camelCase
export const formatCurrency = (value: number): string => { /* ... */ };
export const validateEmail = (email: string): boolean => { /* ... */ };

// Constants: UPPER_SNAKE_CASE
export const MAX_FILE_SIZE = 5 * 1024 * 1024;
export const ANIMATION_DURATION = 0.6;

// Private/Internal: _camelCase
const _internalHelper = () => { /* ... */ };
```

---

## 🔒 **Security & Validation**

### **Input Validation**
```typescript
// ✅ Always validate user input
const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateForm = (data: FormData) => {
  const errors: Record<string, string> = {};
  
  if (!data.name || data.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  if (!validateEmail(data.email)) {
    errors.email = 'Invalid email address';
  }
  
  return { isValid: Object.keys(errors).length === 0, errors };
};
```

### **Environment Variables**
```typescript
// ✅ Prefix with VITE_ for Vite
// .env.local
VITE_EMAILJS_PUBLIC_KEY=your_key
VITE_API_BASE_URL=https://api.example.com

// Access safely
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (!publicKey) {
  throw new Error('Missing VITE_EMAILJS_PUBLIC_KEY');
}
```

---

## 🧪 **Testing Standards**

### **Unit Tests**
```typescript
import { describe, it, expect } from 'vitest';
import { validateEmail } from '@/lib/utils';

describe('validateEmail', () => {
  it('should validate correct email', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  it('should reject invalid email', () => {
    expect(validateEmail('invalid-email')).toBe(false);
  });

  it('should reject empty string', () => {
    expect(validateEmail('')).toBe(false);
  });
});
```

### **Component Tests**
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { ContactForm } from './ContactForm';

describe('ContactForm', () => {
  it('renders form inputs', () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument();
  });

  it('submits form with valid data', async () => {
    render(<ContactForm onSubmit={mockSubmit} />);
    
    fireEvent.change(screen.getByPlaceholderText('Your name'), {
      target: { value: 'John Doe' }
    });
    
    fireEvent.click(screen.getByText('Send'));
    
    expect(mockSubmit).toHaveBeenCalled();
  });
});
```

---

## 📝 **Documentation Standards**

### **JSDoc Comments**
```typescript
/**
 * Formats a number as currency
 * @param value - The numeric value to format
 * @param currency - Currency code (default: 'USD')
 * @returns Formatted currency string
 * @example
 * formatCurrency(1234.56) // Returns "$1,234.56"
 */
export const formatCurrency = (
  value: number,
  currency: string = 'USD'
): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(value);
};
```

### **Component Documentation**
```typescript
/**
 * Button - Primary call-to-action button component
 * 
 * Features:
 * - Multiple variants (default, outline, ghost)
 * - Loading state with spinner
 * - Full-width option
 * - Keyboard accessible
 * 
 * @component
 * @example
 * ```tsx
 * <Button variant="default" size="lg" isLoading={false}>
 *   Click me
 * </Button>
 * ```
 */
const Button: FC<ButtonProps> = ({ /* ... */ }) => {
  // Implementation
};
```

---

## 🚀 **Performance Checklist**

### **Code Quality**
- [ ] No `console.log` in production code
- [ ] No `any` types used
- [ ] All unused imports removed
- [ ] All unused variables removed
- [ ] No commented-out code
- [ ] DRY principle followed (no duplication)
- [ ] Functions under 50 lines (readability)
- [ ] Components under 200 lines (split if needed)

### **React Optimization**
- [ ] `useMemo` used for expensive calculations
- [ ] `useCallback` used for callback dependencies
- [ ] `React.memo` for memoized components
- [ ] Proper dependency arrays in hooks
- [ ] No inline function definitions in renders
- [ ] Keys provided in lists

### **Bundle Size**
- [ ] Tree-shaking enabled
- [ ] Type imports used
- [ ] No default imports from barrel files
- [ ] Dynamic imports for code-splitting
- [ ] Unused CSS removed

### **Accessibility**
- [ ] ARIA labels for icons
- [ ] Focus states visible
- [ ] Keyboard navigation works
- [ ] Color contrast ≥ 4.5:1
- [ ] Images have alt text

---

## 🔍 **Code Review Checklist**

When reviewing code, check:

```
Functionality:
  [ ] Code works as intended
  [ ] Edge cases handled
  [ ] Error handling present
  [ ] No console errors

Quality:
  [ ] Readable and maintainable
  [ ] DRY principle followed
  [ ] Proper TypeScript typing
  [ ] JSDoc comments present
  [ ] No code smells

Performance:
  [ ] Unnecessary renders prevented
  [ ] Expensive operations memoized
  [ ] Bundle size impact minimal
  [ ] Animations GPU-accelerated

Security:
  [ ] Input validation present
  [ ] No hardcoded secrets
  [ ] XSS prevention measures
  [ ] SQL injection prevention (if applicable)

Testing:
  [ ] Unit tests provided
  [ ] Edge cases covered
  [ ] Error scenarios tested
  [ ] Manual testing done

Accessibility:
  [ ] ARIA labels appropriate
  [ ] Keyboard accessible
  [ ] Screen reader compatible
  [ ] Color contrast sufficient
```

---

## 🛠️ **Tools & Linting**

### **ESLint Configuration**
```javascript
// eslint.config.js
export default [
  {
    files: ["src/**/*.{ts,tsx}"],
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-unused-vars": "error",
      "prefer-const": "error",
      "no-var": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-types": "warn"
    }
  }
];
```

### **Pre-commit Hooks (Husky)**
```bash
# Install
npm install --save-dev husky lint-staged
npx husky install

# .husky/pre-commit
#!/bin/sh
npx lint-staged

# package.json
{
  "lint-staged": {
    "src/**/*.{ts,tsx}": ["eslint --fix", "prettier --write"]
  }
}
```

---

## 📚 **Resources**

- [React Best Practices](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
- [ESLint Rules](https://eslint.org/docs/rules/)

---

**Last Updated:** March 24, 2026  
**Maintained By:** Engineering Team  
**Next Review:** Quarterly
