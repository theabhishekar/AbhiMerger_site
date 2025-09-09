import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { FileText, Table, Zap, CheckCircle, Eye, Heart } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Smart PDF Detection",
    description: "Automatically identifies PDF file paths in Excel cells, supporting local files, URLs, and cloud storage links.",
    delay: 0,
  },
  {
    icon: Table,
    title: "Interactive Data Table",
    description: "Browse your Excel data with powerful search and filtering capabilities. Click cells to select PDF sources.",
    delay: 100,
  },
  {
    icon: Zap,
    title: "Lightning Fast Merging",
    description: "Merge multiple PDFs in seconds with real-time progress tracking and comprehensive error handling.",
    delay: 200,
  },
  {
    icon: CheckCircle,
    title: "Built-in Validation",
    description: "Validates PDF files before merging to ensure integrity and prevent errors in your final document.",
    delay: 300,
  },
  {
    icon: Eye,
    title: "Native PDF Viewer",
    description: "Preview your merged PDF documents directly within the app before saving or sharing.",
    delay: 400,
  },
  {
    icon: Heart,
    title: "Cross-Platform",
    description: "Works seamlessly across Windows, macOS, and Linux with native performance and familiar UI patterns.",
    delay: 500,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" data-testid="features-title">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="features-description">
              Built for professionals who need to consolidate PDF documents efficiently and reliably
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={feature.delay}>
              <GlassCard hover className="p-8" data-testid={`feature-card-${index}`}>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" data-testid={`feature-icon-${index}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-testid={`feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`feature-description-${index}`}>
                  {feature.description}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
