import { View } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { ReactNode, useEffect, useRef, useState } from "react"
import { useLenis } from "lenis/react";
import { Item3D } from "./components/threeItem/Item3D";
import { useStore } from "./store/useStore"
import Lenis from 'lenis'
import Cards from "./components/card"
import Marquee from "./components/marquee"
import Hero from "./components/hero"
import { Button } from "./components/button";

function App() {
    const setLenis = useStore((state) => state.setLenis)
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 1.5,
            syncTouch: true, // Synchronise le défilement tactile
            syncTouchLerp: 0.075, // Ajuste la valeur de lissage pour le tactile
            infinite: false,
        })

        setLenis(lenisInstance)

        function raf(time: number) {
            lenisInstance.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        lenisInstance.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
            setScrollY(scroll);
        });

        return () => {
            lenisInstance.destroy()
        }
    }, [setLenis])

    const item = { component: Item3D }
    return (
        <div className="background text-white">
            <View className="flex z-[-1] fixed rounded-t-md h-dvh w-dvw">
                <Item3D />
            </View>
            <Hero />
            <Button
                onClick={() => console.log('clicked')}
                className="custom-class"
            >
                Click Me
            </Button>
            <Cards />
            <Marquee />
            <Marquee isReversed={true} tool={true} />
            <div className="min-h-screen w-dvw">
                <p>CONTACT</p>
            </div>

            <div className="fixed top-0 left-0 w-dvw h-dvh ">
                <Canvas
                    camera={{
                        zoom: 1,
                    }}
                    className="fixed"
                    eventSource={document.getElementById("root")!}
                >
                    <View.Port />
                </Canvas>
            </div>
        </div>
    )
}

export default App
