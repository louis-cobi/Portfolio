type AnyFunction = (...args: any[]) => any

export const debounce = <T extends AnyFunction>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    
    timeoutId = setTimeout(() => {
      func.apply(null, args)
    }, delay)
  }
} 