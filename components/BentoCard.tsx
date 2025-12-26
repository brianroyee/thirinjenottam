import React from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BentoCardProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  noPadding?: boolean;
  onClick?: () => void;
}

const BentoCard: React.FC<BentoCardProps> = ({
  className,
  children,
  delay = 0,
  noPadding = false,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      onClick={onClick}
      className={cn(
        "rounded-3xl overflow-hidden relative group transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl h-full flex flex-col",
        noPadding ? "" : "p-6 sm:p-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default BentoCard;
