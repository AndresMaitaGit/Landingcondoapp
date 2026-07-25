import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { VideoDemoSection } from "./components/VideoDemoSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { PricingSection } from "./components/PricingSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(
        document.documentElement.classList.contains("dark"),
      );
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen w-full transition-colors duration-500"
      style={{
        backgroundColor: isDark ? "#0F1419" : "#FFFFFF",
      }}
    >
      <Header />
      <main className="w-full">
        <HeroSection />
        <VideoDemoSection />
        <FeaturesSection />
        <PricingSection />
        {/* <TestimonialsSection /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}