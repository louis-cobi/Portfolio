import { useEffect, useRef } from "react";
import gsap from "gsap";
import cn from "clsx";
import { useTextAnimation } from "../../hooks/useTextAnimation";
import "./index.css";

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

export const Button = ({ onClick, children, className }: ButtonProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const { animate } = useTextAnimation();
    const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!buttonRef.current || !textRef.current) return;

        const button = buttonRef.current;
        const text = textRef.current;
        let cleanup: (() => void) | undefined;

        const handleMouseEnter = () => {
            if (debounceTimeout.current) return;
            gsap.to(button, {
                "--anim": 1,
                duration: 0.6,
                ease: "expo.out",
            });
            cleanup = animate(text);

            debounceTimeout.current = setTimeout(() => {
                debounceTimeout.current = null;
            }, 1500);
        };

        const handleMouseLeave = () => {
            if (cleanup) cleanup();
        };

        button.addEventListener("mouseenter", handleMouseEnter);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mouseenter", handleMouseEnter);
            button.removeEventListener("mouseleave", handleMouseLeave);
            if (cleanup) cleanup();
            if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
        };
    }, [animate]);

    return (
        <button
            ref={buttonRef}
            onClick={onClick}
            className={cn("hover-effect-button z-[10]", className)}
            data-cursor="pointer">
            <span
                ref={textRef}
                className="hover-effect hover-effect--bg hover-effect--cursor-square">
                {children}
            </span>
        </button>
    );
};
