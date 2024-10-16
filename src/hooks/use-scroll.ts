import { useStore } from '../store/useStore'
import { useEffect } from 'react'
import { Lenis } from 'lenis/react'

type ScrollCallback = (args: { scroll: number; limit: number; velocity: number; direction: number; progress: number }) => void

export function useScroll(callback: ScrollCallback, deps: any[] = []) {
  const lenis = useStore((state) => state.lenis)

  useEffect(() => {
    if (!lenis) return

    lenis.on('scroll', callback)

    return () => {
      lenis.off('scroll', callback)
    }
  }, [lenis, callback, ...deps])
}
