import { useStore } from '../store/useStore'
import { useEffect } from 'react'

type ScrollCallback = (args: { scroll: number; limit: number; velocity: number; direction: number; progress: number }) => void

export function useScroll(callback: ScrollCallback, deps: any[] = []) {
  const lenis = useStore((state) => state.lenis)

  useEffect(() => {
    if (!lenis) return

    // const handleScroll = (e: any) => {
    //   callback({
    //     scroll: e.scroll,
    //     limit: e.limit,
    //     velocity: e.velocity,
    //     direction: e.direction,
    //     progress: e.progress
    //   })
    // }

    lenis.on('scroll', callback)
    lenis.emit()

    return () => {
      lenis.off('scroll', callback)
    }
  }, [lenis, callback, ...deps])
}
