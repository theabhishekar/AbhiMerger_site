import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Upload Excel",
    description: "Import your .xlsx or .xls files containing PDF references",
    delay: 0,
  },
  {
    number: "2",
    title: "Browse Data",
    description: "Explore your data with interactive table, search, and filters",
    delay: 100,
  },
  {
    number: "3",
    title: "Select PDFs",
    description: "Click cells to select PDF paths or use bulk selection",
    delay: 200,
  },
  {
    number: "4",
    title: "Merge Files",
    description: "Watch real-time progress as PDFs are validated and merged",
    delay: 300,
  },
  {
    number: "5",
    title: "Preview & Save",
    description: "Review the merged PDF and save to your preferred location",
    delay: 400,
  },
];

export function WorkflowSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="workflow" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" data-testid="workflow-title">
              Simple 5-Step Workflow
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="workflow-description">
              From Excel upload to PDF merger in just five intuitive steps
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Workflow Steps */}
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={step.delay}>
                <motion.div
                  className="workflow-step text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  data-testid={`workflow-step-${index}`}
                >
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-primary-foreground" data-testid={`step-number-${index}`}>
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" data-testid={`step-title-${index}`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`step-description-${index}`}>
                    {step.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Connecting Lines */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border"></div>
        </div>

        {/* Interactive Demo */}
        <ScrollReveal delay={500}>
          <div className="mt-16 text-center">
            <Button
              onClick={() => scrollToSection("download")}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg"
              size="lg"
              data-testid="button-interactive-demo"
            >
              Try Interactive Demo
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
