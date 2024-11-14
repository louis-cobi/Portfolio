import { useRef, useCallback } from "react";
import gsap from "gsap";
import { debounce } from "../utils/debounce";
import SplitType from "split-type";

const lettersAndSymbols = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "-",
    "_",
    "+",
    "=",
    ";",
    ":",
    "<",
    ">",
    ",",
];

interface UseTextAnimationProps {
    duration?: number;
    repeatDelay?: number;
    staggerDelay?: number;
    repeats?: number;
}

export const useTextAnimation = ({
    duration = 0.03,
    repeatDelay = 0.04,
    staggerDelay = 0.07,
    repeats = 3,
}: UseTextAnimationProps = {}) => {
    const originalText = useRef<string>("");
    const splitter = useRef<SplitType | null>(null);
    const originalChars = useRef<string[]>([]);

    const reset = useCallback((element: HTMLElement) => {
        if (!element) return;
        gsap.killTweensOf(element.querySelectorAll(".char"));
        element.innerHTML = originalText.current;
    }, []);

    const animateBack = useCallback(
        debounce((element: HTMLElement) => {
            if (!element) return;
            gsap.to(element, {
                duration: 0.6,
                ease: "power4",
                "--anim": 0,
                onComplete: () => reset(element),
            });
        }, 100),
        []
    );

    const animate = useCallback(
        (element: HTMLElement) => {
            if (!element) return;

            originalText.current = element.innerText;

            // Utilisation de SplitType pour diviser le texte
            splitter.current = new SplitType(element, {
                types: "words,chars",
                tagName: "span",
            });

            const chars = splitter.current.chars;
            if (chars) {
                originalChars.current = chars.map((char) => char.innerHTML);
                chars.forEach((char, position) => {
                    let repeatCount = 0;
                    const initialChar = char.innerHTML;

                    gsap.fromTo(
                        char,
                        { opacity: 0 },
                        {
                            opacity: 1,
                            duration,
                            delay: (position + 1) * staggerDelay,
                            repeat: repeats,
                            repeatDelay,
                            onStart: () => {
                                gsap.set(char, { "--opa": 1 });
                            },
                            onRepeat: () => {
                                repeatCount++;
                                if (repeatCount === 1) {
                                    gsap.set(char, { "--opa": 0 });
                                }
                                char.innerHTML =
                                    lettersAndSymbols[
                                        Math.floor(
                                            Math.random() *
                                                lettersAndSymbols.length
                                        )
                                    ];
                            },
                            onComplete: () => {
                                char.innerHTML = initialChar;
                            },
                        }
                    );
                });
            }

            return () => {
                animateBack(element);
            };
        },
        [duration, repeatDelay, staggerDelay, repeats, animateBack]
    );

    return { animate };
};
