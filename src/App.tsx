import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { Item3D } from "./components/threeItem/Item3D";
import { useStore } from "./store/useStore";
import Lenis from "lenis";
import Cards from "./components/card";
import { IconMarquee, IconMarqueeReversed } from "./components/marquee";
import Hero from "./components/hero";
import Profil from "./components/profil";
import { Button } from "./components/button";
import Terminal from "./components/terminal";
import Loading from "./components/loading";

const MainContent = () => {
    return (
        <div className="background text-white">
            <View className="flex z-[-1] fixed rounded-t-md h-dvh w-dvw">
                <Item3D />
            </View>
            <Hero />
            <Profil />
            <Cards />
            <div className="mt-[25dvh] mb-[25dvh]">
                <IconMarquee />
                <IconMarqueeReversed />
            </div>
            <Terminal />
            <div className=" w-dvw">
                <p>CONTACT</p>
            </div>

            <div className="fixed top-0 left-0 w-dvw h-dvh ">
                <Canvas
                    camera={{
                        zoom: 1,
                    }}
                    className="fixed"
                    eventSource={document.getElementById("root")!}>
                    <View.Port />
                </Canvas>
            </div>
        </div>
    );
};

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const setLenis = useStore((state) => state.setLenis);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 3000);

        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 1.5,
            syncTouch: true, // Synchronise le défilement tactile
            syncTouchLerp: 0.075, // Ajuste la valeur de lissage pour le tactile
            infinite: false,
            smoothWheel: true,
            lerp: 0.2,
            wheelBoundary: 0,
            bounceMultiplier: 0,
        });

        setLenis(lenisInstance);

        function raf(time: number) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        lenisInstance.on(
            "scroll",
            ({ scroll, limit, velocity, direction, progress }) => {
                setScrollY(Math.round(scroll));
            }
        );

        return () => {
            clearTimeout(timer);
            lenisInstance.destroy();
        };
    }, [setLenis]);

    const item = { component: Item3D };
    return <>{isLoading ? <Loading /> : <MainContent />}</>;
}

export default App;
