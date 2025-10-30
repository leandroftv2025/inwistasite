import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="gap-2 hover:scale-105 transition-transform"
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-primary transition-all" />
      ) : (
        <Moon size={18} className="text-primary transition-all" />
      )}
    </Button>
  );
}
