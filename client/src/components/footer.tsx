export function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
    ],
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith("#")) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/App Icon.png" alt="AbhiMerger" className="w-8 h-8" data-testid="footer-logo" />
              <span className="text-xl font-semibold" data-testid="footer-brand">AbhiMerger</span>
            </div>
            <p className="text-sm opacity-70" data-testid="footer-description">
              Streamlining PDF workflows for Excel users worldwide with cross-platform desktop applications.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-product-title">Product</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:opacity-100 transition-opacity text-left"
                    data-testid={`footer-link-product-${index}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70" data-testid="footer-copyright">
            © 2024 AbhiMerger. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <span className="text-sm opacity-70">Created by </span>
            <a
              href="https://abhishekardev.vercel.app/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm opacity-70 hover:opacity-100 transition-opacity underline"
            >
              Abhishekar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
