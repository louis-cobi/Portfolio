import { Vector3, Euler } from 'three'

export interface Step {
  position: Vector3
  rotation: Euler
  scale: number
}

export const item4Steps: Step[] = [
  {
    position: new Vector3(0, -1.75, 0),
    rotation: new Euler(0, Math.PI * 0.5, 0),
    scale: 0.045,
  },
  {
    position: new Vector3(0.15, -0.4, 0),
    rotation: new Euler(-Math.PI / 4, -Math.PI * 0.75, -Math.PI / 4),
    scale: 0.02,
  },
  {
    position: new Vector3(0, 0, 0),
    rotation: new Euler(0, Math.PI, 0),
    scale: 0.03,
  },
  {
    position: new Vector3(-0.15, 0.4, 0),
    rotation: new Euler(Math.PI / 4, Math.PI * 0.75, Math.PI / 4),
    scale: 0.04,
  },
  {
    position: new Vector3(0, 1.75, 0),
    rotation: new Euler(0, Math.PI * 1.5, 0),
    scale: 0.045,
  },
]
