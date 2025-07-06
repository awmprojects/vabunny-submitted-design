
import { Rabbit } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoIconProps {
  size?: "mobile" | "desktop";
  className?: string;
}

const LogoIcon = ({ size = "desktop", className }: LogoIconProps) => {
  const containerClasses = cn(
    "bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105",
    size === "desktop" ? "w-14 h-14 rounded-xl" : "w-12 h-12 rounded-2xl",
    className
  );

  const iconClasses = size === "desktop" ? "w-8 h-8" : "w-6 h-6";

  return (
    <div className={containerClasses}>
      <Rabbit className={`${iconClasses} text-white`} />
    </div>
  );
};

export default LogoIcon;
