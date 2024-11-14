import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import "./index.css";
import { Project, projects } from "./project";
import { Button } from "../button";

gsap.registerPlugin(ScrollTrigger);

const SingleCard = ({ project }: { project: Project }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = cardRef.current;

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "center center",
                end: "max",
                scrub: true,
            },
        });

        timeline
            .to(
                el,
                {
                    ease: "none",
                    startAt: { filter: "blur(0px)" },
                    filter: "blur(3px)",
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

        return () => {
            if (timeline.scrollTrigger) {
                timeline.scrollTrigger.kill();
            }
            timeline.kill();
        };
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
            <div className="card__content flex flex-col lg:flex-row">
                <div className="flex flex-col lg:flex-row-reverse lg:flex-row items-center h-full">
                    <div className="lg:w-1/2 flex-shrink-0 lg:col-span-1 flex justify-center">
                        <div className="project__img__container flex items-center justify-center ">
                            <img src={project.src} className="project__img" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 p-8 grid content-evenly items-center lg:col-span-1 ">
                        <div>
                            <h2 className="text-2xl font-bold lg:mb-4 place-self-start">
                                {project.title}
                            </h2>
                            <div className="inline-flex italic text-xs text-gray-500">
                                {project.techno.map((techno, key) => (
                                    <h3 className="m-1" key={key}>
                                        {techno}
                                    </h3>
                                ))}
                            </div>
                        </div>
                        <p className="mt-1 mb-6 grow project__description">
                            {project.description}
                        </p>
                        <div className="flex items-start items-center">
                            <p>{`>`}</p>
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
        </div>
    );
};

const Cards = () => {
    const lenis = useLenis();
    const scrollSyncRef = useRef(false); // Flag pour éviter les double appels initiaux.

    useEffect(() => {
        if (lenis) {
            lenis.on("scroll", ScrollTrigger.update);

            const scrollFn = (time: number) => {
                lenis.raf(time);
                requestAnimationFrame(scrollFn);
            };

            // Synchroniser GSAP et Lenis après un court délai
            const initSync = () => {
                if (!scrollSyncRef.current) {
                    ScrollTrigger.refresh(true); // Force la mise à jour complète
                    scrollSyncRef.current = true;
                }
            };

            setTimeout(initSync, 100);

            const rafId = requestAnimationFrame(scrollFn);

            return () => {
                cancelAnimationFrame(rafId);
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
                lenis.off("scroll", ScrollTrigger.update);
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
            ScrollTrigger.refresh();
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
