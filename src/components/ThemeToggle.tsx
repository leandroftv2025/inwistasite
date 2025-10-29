import { Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="gap-2 hover:scale-105 transition-transform relative group"
    >
      <Sparkles size={16} className="text-primary transition-all group-hover:animate-pulse" />
      <span className="hidden sm:inline">Spotlight</span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
    </Button>
  );
}
