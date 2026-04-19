import { motion } from "framer-motion";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

const UnsplashCardImage = ({
  className,
  src,
  alt,
}: {
  className?: string;
  src: string;
  alt: string;
}) => (
  <div
    className={cn(
      "relative h-full w-full min-h-[7rem] overflow-hidden rounded-xl border border-primary/15",
      className
    )}
  >
    <img
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      className="h-full w-full object-cover transition-transform duration-500 group-hover/bento:scale-105"
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/65 via-background/10 to-transparent" />
  </div>
);

const items = [
  {
    title: "Instant Collections",
    description: "Accept UPI, cards, and bank transfers with real-time payment confirmation.",
    header: (
      <UnsplashCardImage
        src="https://images.unsplash.com/photo-1628527304948-06157ee3c8a6"
        alt="Payment terminal and digital payment setup"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-primary/80" />,
  },
  {
    title: "Smart Reconciliation",
    description: "Auto-match settlements and exports so your finance team closes books faster.",
    header: (
      <UnsplashCardImage
        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43"
        alt="Finance analytics dashboard on laptop"
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-primary/80" />,
  },
  {
    title: "Developer-First APIs",
    description: "Launch quickly with predictable APIs, webhooks, and sandbox workflows.",
    header: (
      <UnsplashCardImage
        src="https://images.unsplash.com/photo-1617042375876-a13e36732a04"
        alt="Developer workspace with code editor"
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-primary/80" />,
  },
  {
    title: "Operational Visibility",
    description: "Monitor success rates, drop-offs, and alerts from one clean command center.",
    header: (
      <UnsplashCardImage
        src="https://images.unsplash.com/photo-1562618817-253b06cf2b6e"
        alt="Operations dashboard and monitoring screens"
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-primary/80" />,
  },
  {
    title: "Adaptive Checkout",
    description: "Smart payment routing improves conversion across mobile and desktop journeys.",
    header: (
      <UnsplashCardImage
        src="https://images.unsplash.com/photo-1658282513894-612835eb44e4"
        alt="Mobile checkout and online payment flow"
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-primary/80" />,
  },
  {
    title: "Modular Integrations",
    description: "Use only what you need today and expand features without re-architecting later.",
    header: (
      <UnsplashCardImage
        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a"
        alt="Connected systems and modular software architecture"
      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-primary/80" />,
  },
  {
    title: "Enterprise-Grade Security",
    description: "Built-in controls, tokenization, and audit trails keep every transaction protected.",
    header: (
      <UnsplashCardImage
        src="https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b"
        alt="Cybersecurity visualization with digital lock"
      />
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-primary/80" />,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      {/* Premium gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)), transparent)" }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
          style={{ background: "radial-gradient(circle, hsl(var(--secondary)), transparent)" }} />
      </div>
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--secondary) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--secondary) / 0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-14 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 capsule bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
            Why Choose Us
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Built For <span className="text-gradient">Modern Payments</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            A bento-style feature system that highlights the exact capabilities your team needs to ship,
            scale, and protect revenue.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <BentoGrid className="mx-auto max-w-6xl">
            {items.map((item, i) => (
              <BentoGridItem
                key={item.title}
                title={<span className="font-display text-base sm:text-lg text-foreground">{item.title}</span>}
                description={<span className="text-xs sm:text-sm text-muted-foreground">{item.description}</span>}
                header={item.header}
                icon={item.icon}
                className={cn(
                  "border border-primary/15 bg-card/80 backdrop-blur-md hover:border-primary/35",
                  i === 3 || i === 6 ? "md:col-span-2" : ""
                )}
              />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
