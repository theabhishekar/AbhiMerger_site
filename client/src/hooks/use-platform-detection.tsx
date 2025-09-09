import { useState, useEffect } from "react";

export type Platform = "windows" | "mac" | "linux";

export function usePlatformDetection(): Platform {
  const [platform, setPlatform] = useState<Platform>("windows");

  useEffect(() => {
    const detectPlatform = (): Platform => {
      const userAgent = navigator.userAgent.toLowerCase();
      const platform = navigator.platform?.toLowerCase() || "";

      if (platform.includes("mac") || userAgent.includes("mac")) {
        return "mac";
      } else if (platform.includes("win") || userAgent.includes("windows")) {
        return "windows";
      } else if (platform.includes("linux") || userAgent.includes("linux")) {
        return "linux";
      }
      return "windows"; // default
    };

    setPlatform(detectPlatform());
  }, []);

  return platform;
}

export function getPlatformDisplayName(platform: Platform): string {
  switch (platform) {
    case "mac":
      return "Mac";
    case "linux":
      return "Linux";
    case "windows":
    default:
      return "Windows";
  }
}
