import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import "./index.css";
import { Project, projects } from "./project";
import { Button } from "../button";

gsap.registerPlugin(ScrollTrigger);

const SingleCard = ({ project }: { project: Project }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const el = cardRef.current;

        gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "center center",
                end: "max",
                scrub: true,
            },
        })
            .to(
                el,
                {
                    ease: "none",
                    startAt: { filter: "blur(0px)" },
                    filter: "blur(3px)",
                    scrollTrigger: {
                        trigger: el,
                        start: "center center",
                        end: "+=100%",
                        scrub: true,
                    },
                },
                0
            )
            .to(
                el,
                {
                    ease: "none",
                    scale: 0.4,
                    yPercent: -50,
                },
                0
            );
    }, []);

    return (
        <div
            ref={cardRef}
            className="content--sticky h-[70dvh] w-[80dvw] mt-[8dvh] card">
            <div className="tools">
                <div className="circle">
                    <span className="red box"></span>
                </div>
                <div className="circle">
                    <span className="yellow box"></span>
                </div>
                <div className="circle">
                    <span className="green box"></span>
                </div>
            </div>
            <div className="card__content  flex flex-col lg:flex-row">
                <div className="flex flex-col lg:flex-row-reverse lg:flex-row items-center h-full">
                    <div className="lg:w-1/2 flex-shrink-0 lg:col-span-1 flex justify-center">
                        <div
                            className="project__img inset-0 bg-contain bg-no-repeat bg-center"
                            style={{
                                backgroundImage: `url(${project.src})`,
                            }}></div>
                    </div>
                    <div className="lg:w-1/2 p-8 grid content-evenly h-full items-center lg:col-span-1 ">
                        <h2 className="text-2xl font-bold mb-4 place-self-start">
                            {project.title}
                        </h2>
                        <p className="text-gray-700 mb-6 grow ">
                            {project.description}
                        </p>
                        <Button>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer">
                                En savoir plus
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Cards = () => {
    const lenis = useLenis();
    const originalLerp = useRef(null);
    const originalSmoothWheel = useRef(null);

    useEffect(() => {
        if (lenis) {
            // Sauvegardez la valeur originale de lerp
            originalLerp.current = lenis.options.lerp;
            originalSmoothWheel.current = lenis.options.smoothWheel;

            // Modifiez la valeur de lerp pour ce composant
            lenis.options.lerp = 0.2;
            lenis.options.smoothWheel = true;

            lenis.on("scroll", ScrollTrigger.update);

            const scrollFn = (time) => {
                lenis.raf(time);
                requestAnimationFrame(scrollFn);
            };
            requestAnimationFrame(scrollFn);

            // Restaurez la valeur originale de lerp lorsque le composant est démonté
            return () => {
                lenis.options.lerp = originalLerp.current;
                lenis.options.smoothWheel = originalSmoothWheel.current;
            };
        }
    }, [lenis]);

    useEffect(() => {
        const preloadImages = async () => {
            const images = projects.map((project) => project.src);
            await Promise.all(
                images.map((src) => {
                    return new Promise((resolve, reject) => {
                        const img = new Image();
                        img.onload = resolve;
                        img.onerror = reject;
                        img.src = src;
                    });
                })
            );
            document.body.classList.remove("loading");
        };

        preloadImages();
    }, []);

    return (
        <div className="cards-container">
            {projects.map((project, index) => (
                <SingleCard key={index} project={project} />
            ))}
        </div>
    );
};

export default Cards;
