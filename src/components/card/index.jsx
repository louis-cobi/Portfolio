import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from "lenis/react";
import "./index.css"
import { projects } from "./project";

gsap.registerPlugin(ScrollTrigger);


const SingleCard = ({ project }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'center center',
        end: 'max',
        scrub: true
      }
    })
      .to(el, {
        ease: 'none',
        startAt: { filter: 'blur(0px)' },
        filter: 'blur(3px)',
        scrollTrigger: {
          trigger: el,
          start: 'center center',
          end: '+=100%',
          scrub: true
        }
      }, 0)
      .to(el, {
        ease: 'none',
        scale: 0.4,
        yPercent: -50
      }, 0);
  }, []);

  return (
    <div ref={cardRef} className="content--sticky card h-[500px] w-[500px] flex flex-col " >
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
      <div className="card__content">
        <img src={project.src} alt={project.title} className="content__img" />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">En savoir plus</a>
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
      originalSmoothWheel.current = lenis.options.smoothWheel

      // Modifiez la valeur de lerp pour ce composant
      lenis.options.lerp = 0.2;
      lenis.options.smoothWheel = true;

      lenis.on('scroll', ScrollTrigger.update);

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
      const images = projects.map(project => project.src);
      await Promise.all(images.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      }));
      document.body.classList.remove('loading');
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

