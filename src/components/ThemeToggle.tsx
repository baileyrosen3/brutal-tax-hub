
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { sun, moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={`
        fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full transition-all duration-300
        ${theme === 'neobrutalist' 
          ? 'neo-border neo-shadow bg-neo-yellow text-black hover:bg-neo-blue hover:text-white' 
          : 'bg-slate-800 text-white hover:bg-slate-700 shadow-lg'
        }
      `}
      size="icon"
    >
      {theme === 'neobrutalist' ? (
        <sun className="h-6 w-6" />
      ) : (
        <moon className="h-6 w-6" />
      )}
    </Button>
  );
};

export default ThemeToggle;
