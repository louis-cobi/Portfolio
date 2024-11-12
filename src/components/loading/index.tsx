import { useEffect, useRef } from 'react';
import { useTextAnimation } from '../../hooks/useTextAnimation';
import "./index.css"

const Loading = () => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const { animate } = useTextAnimation({
    duration: 0.04,
    repeatDelay: 0.06,
    staggerDelay: 0.1,
    repeats: 3,
  });

  useEffect(() => {
    const loadingElement = loadingRef.current;

    if (loadingElement) {
      const cleanup = animate(loadingElement);

      return () => {
        // Nettoyage des animations lors du démontage
        if (cleanup) cleanup();
      };
    }
  }, [animate]);

  return (
    <div
      className="loading-screen"
    >
      <div
        ref={loadingRef}
        className="loading-text"
      >
        Loading...
      </div>
    </div>
  );
};

export default Loading;
