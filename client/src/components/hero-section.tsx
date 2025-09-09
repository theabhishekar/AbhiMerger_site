import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { usePlatformDetection, getPlatformDisplayName } from "@/hooks/use-platform-detection";

export function HeroSection() {
  const platform = usePlatformDetection();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-accent rounded-full"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -1.5,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Streamline Your{" "}
            <span className="text-primary">PDF Workflow</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            AbhiMerger automatically detects PDF references in Excel spreadsheets and merges them into a single document. Cross-platform, intuitive, and powerful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection("download")}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg"
              size="lg"
              data-testid="button-download-primary"
            >
              Download for {getPlatformDisplayName(platform)}
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("workflow")}
              className="border-border px-8 py-4 rounded-full text-lg font-medium hover:bg-secondary transition-all transform hover:scale-105"
              size="lg"
              data-testid="button-view-demo"
            >
              View Demo
            </Button>
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span data-testid="platform-windows">✓ Windows</span>
            <span data-testid="platform-macos">✓ macOS</span>
            <span data-testid="platform-linux">✓ Linux</span>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {/* App Mockup */}
          <div className="app-mockup bg-card p-6" data-testid="app-mockup">
            {/* App Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full" data-testid="window-control-close"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full" data-testid="window-control-minimize"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full" data-testid="window-control-maximize"></div>
              </div>
              <div className="text-sm text-muted-foreground" data-testid="app-title">AbhiMerger.xlsx - Excel</div>
            </div>

            {/* Mock Excel Interface */}
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-border overflow-hidden">
              <div className="bg-secondary px-4 py-2 border-b border-border">
                <div className="flex space-x-8 text-sm">
                  <span className="font-medium">File</span>
                  <span>Edit</span>
                  <span>View</span>
                  <span className="text-primary font-medium">AbhiMerger</span>
                </div>
              </div>

              {/* Mock Spreadsheet Data */}
              <div className="p-4">
                <table className="w-full text-sm" data-testid="excel-table">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-3 bg-muted">Document</th>
                      <th className="text-left py-2 px-3 bg-muted">PDF Path</th>
                      <th className="text-left py-2 px-3 bg-muted">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-2 px-3" data-testid="document-name-1">Invoice_001</td>
                      <td className="py-2 px-3 text-primary" data-testid="pdf-path-1">C:/Documents/invoice_001.pdf</td>
                      <td className="py-2 px-3">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs" data-testid="status-ready-1">
                          ✓ Ready
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 px-3" data-testid="document-name-2">Report_Q1</td>
                      <td className="py-2 px-3 text-primary" data-testid="pdf-path-2">https://drive.google.com/file/d/abc123</td>
                      <td className="py-2 px-3">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs" data-testid="status-ready-2">
                          ✓ Ready
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 px-3" data-testid="document-name-3">Contract_v2</td>
                      <td className="py-2 px-3 text-primary" data-testid="pdf-path-3">\\network\share\contract_v2.pdf</td>
                      <td className="py-2 px-3">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs" data-testid="status-processing">
                          ⟳ Processing
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="mt-4 flex justify-center">
                  <Button
                    className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    data-testid="button-merge-pdfs"
                  >
                    Merge Selected PDFs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
