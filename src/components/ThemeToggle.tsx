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
      className="gap-2 hover:scale-105 transition-transform hover:text-[hsl(var(--turquoise-neon))] group"
    >
      <Sparkles size={18} className="text-primary dark:text-[hsl(var(--turquoise-neon))] group-hover:text-[hsl(var(--turquoise-neon))] dark:group-hover:text-white transition-all" />
    </Button>
  );
}
