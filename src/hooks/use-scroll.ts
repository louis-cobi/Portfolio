import { useStore } from '../store/useStore'
import { useEffect, useRef, useCallback } from 'react'
import { debounce } from '../utils/debounce'

// Votre fonction debounce
type AnyFunction = (...args: any[]) => any

// const debounce = <T extends AnyFunction>(
//   func: T,
//   delay: number
// ): ((...args: Parameters<T>) => void) => {
//   let timeoutId: NodeJS.Timeout

//   return (...args: Parameters<T>) => {
//     clearTimeout(timeoutId)
    
//     timeoutId = setTimeout(() => {
//       func.apply(null, args)
//     }, delay)
//   }
// }

// Types pour le scroll
interface ScrollData {
  scroll: number
  limit: number
  velocity: number
  direction: number
  progress: number
}

type ScrollCallback = (args: ScrollData) => void

export function useScroll(callback: ScrollCallback, deps: any[] = []) {
  const lenis = useStore((state) => state.lenis)
  const lastScrollY = useRef(0)
  const rafId = useRef<number>()
  const isScrolling = useRef(false)

  // Créer une fonction lissée pour le scroll
  const smoothScrollHandler = useCallback((e: ScrollData) => {
    if (!isScrolling.current) {
      isScrolling.current = true
    }

    if (rafId.current) {
      cancelAnimationFrame(rafId.current)
    }

    rafId.current = requestAnimationFrame(() => {
      const scrollDiff = e.scroll - lastScrollY.current
      const smoothedScroll = Math.abs(scrollDiff) > 100 
        ? lastScrollY.current + (scrollDiff * 0.5)
        : e.scroll

      callback({
        ...e,
        scroll: smoothedScroll
      })

      lastScrollY.current = smoothedScroll
      isScrolling.current = false
    })
  }, [callback])

  // Utiliser votre version de debounce
  const debouncedScrollHandler = useCallback(
    debounce(smoothScrollHandler, 16), // 16ms pour environ 60fps
    [smoothScrollHandler]
  )

  useEffect(() => {
    if (!lenis) return

    // Attacher l'écouteur d'événements avec le debounce
    lenis.on('scroll', debouncedScrollHandler)
    
    // Émettre l'événement initial
    lenis.emit()

    // Nettoyage
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
      lenis.off('scroll', debouncedScrollHandler)
    }
  }, [lenis, debouncedScrollHandler, ...deps])

  // Exposer une méthode pour forcer l'arrêt de l'animation si nécessaire
  const stopScrollAnimation = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current)
    }
    isScrolling.current = false
  }, [])

  return { isScrolling: isScrolling.current, stopScrollAnimation }
}