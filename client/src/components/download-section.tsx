import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { usePlatformDetection, getPlatformDisplayName } from "@/hooks/use-platform-detection";

const platforms = [
  {
    id: "windows",
    name: "Windows",
    description: "Windows 10/11 (64-bit)",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.351" />
      </svg>
    ),
  },
  {
    id: "mac",
    name: "macOS",
    description: "macOS 10.15+ (Intel & Apple Silicon)",
    bgColor: "bg-gray-100",
    iconColor: "text-gray-600",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
      </svg>
    ),
  },
  {
    id: "linux",
    name: "Linux",
    description: "Ubuntu 18.04+ / Fedora 32+",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.504 0c-.155 0-.315.008-.480.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 01-.088.095c-.16.155-.331.293-.500.435-.18.145-.354.295-.6.652-.18.26-.476.433-.796.451-.322.016-.668-.201-.813-.496-.138-.291-.053-.6-.061-.94-.01-.366-.045-.734-.087-1.068-.043-.33-.093-.663-.036-.975.057-.318.181-.579.337-.812.156-.236.375-.392.648-.456l.208-.026c.207-.031.414-.031.621-.031l.003-.003z" />
      </svg>
    ),
  },
];

export function DownloadSection() {
  const detectedPlatform = usePlatformDetection();

  return (
    <section id="download" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div>
            <h2 className="text-4xl font-bold mb-6" data-testid="download-title">
              Download AbhiMerger
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="download-description">
              Get started with the most efficient PDF merging solution for Excel users. Available for all major platforms.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {platforms.map((platform, index) => {
                const isRecommended = platform.id === detectedPlatform;
                return (
                  <ScrollReveal key={platform.id} delay={index * 100}>
                    <GlassCard
                      hover
                      className={`p-8 transition-all ${
                        isRecommended ? "border-2 border-primary" : ""
                      }`}
                      data-testid={`platform-card-${platform.id}`}
                    >
                      <div className={`w-16 h-16 ${platform.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <div className={platform.iconColor} data-testid={`platform-icon-${platform.id}`}>
                          {platform.icon}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2" data-testid={`platform-name-${platform.id}`}>
                        {platform.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4" data-testid={`platform-description-${platform.id}`}>
                        {platform.description}
                      </p>
                      <Button
                        className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-blue-600 transition-colors"
                        data-testid={`button-download-${platform.id}`}
                      >
                        Download for {platform.name}
                      </Button>
                      {isRecommended && (
                        <div className="mt-2 text-xs text-primary" data-testid="recommended-badge">
                          Recommended
                        </div>
                      )}
                    </GlassCard>
                  </ScrollReveal>
                );
              })}
            </div>

            <div className="text-sm text-muted-foreground mb-8" data-testid="system-requirements">
              System Requirements: 4GB RAM • 500MB Storage • .NET 6.0 Runtime
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="px-6 py-3 border-border rounded-lg hover:bg-secondary transition-colors"
                data-testid="button-release-notes"
              >
                View Release Notes
              </Button>
              <Button
                variant="outline"
                className="px-6 py-3 border-border rounded-lg hover:bg-secondary transition-colors"
                data-testid="button-documentation"
              >
                Documentation
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
