export function mapRange(inMin: number, inMax: number, value: number, outMin: number, outMax: number): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

export function clamp(min: number, value: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}
