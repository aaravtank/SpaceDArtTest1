import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "neon";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {

        const variants = {
            primary: "bg-white text-black hover:bg-gray-200 border border-transparent",
            secondary: "bg-zinc-800 text-white hover:bg-zinc-700 border border-transparent",
            outline: "bg-transparent border border-white/20 text-white hover:border-white/50 hover:bg-white/5",
            ghost: "bg-transparent text-white hover:bg-white/10 border-transparent",
            neon: "bg-transparent text-neon-blue border border-neon-blue/50 hover:bg-neon-blue/10 hover:border-neon-blue shadow-[0_0_10px_rgba(106,182,255,0.2)] hover:shadow-[0_0_20px_rgba(106,182,255,0.4)] transition-all duration-300",
        };

        const sizes = {
            sm: "h-9 px-4 text-xs tracking-wider uppercase",
            md: "h-11 px-6 text-sm tracking-wider uppercase",
            lg: "h-14 px-8 text-base tracking-wider uppercase",
        };

        return (
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
