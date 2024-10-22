import { View } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { ReactNode, useEffect, useRef, useState } from "react"
import { useLenis } from "lenis/react";
import { Item4 } from "./grid/Item4"
import { useStore } from "./store/useStore"
import Lenis from 'lenis'


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
            touchMultiplier: 2,
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

    const item = { component: Item4 }
    return (
        <div>
            <div className="min-h-screen text-white bg-[#0c0c0c] select-none background">
                <div className="container p-5 pb-20 mx-auto ">
                    <div className="relative mt-5 overflow-hidden">
                        <div
                            className="grid h-[5000px] gap-5 overflow-hidden group grid-clos-1 md:grid-cols-2 lg:grid-cols-4"
                            data-gird
                        >
                            <h1 className="flex ">hello </h1>
                            <View className="flex z-[2]  aspect-square fixed rounded-t-md h-[500px]">
                                <Item4 />
                            </View>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative rounded-md cursor-pointer bg-white/10 card p-[1px]">
                <View className="flex z-[2] bg-[#171717]  aspect-square  relative rounded-t-md">
                    <Item4 />
                    <item.component />
                </View>
            </div>
            <div className="relative rounded-md cursor-pointer bg-white/10 card p-[1px]">
                <View className="flex z-[2] bg-[#171717]  aspect-square  relative rounded-t-md">
                    <Item4 />
                    <item.component />
                </View>
            </div>

            <div className="fixed top-0 left-0 z-20 w-full h-screen pointer-events-none ">
                <Canvas
                    camera={{
                        zoom: 0.8,
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
