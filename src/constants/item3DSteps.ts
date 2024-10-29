import { Vector3, Euler } from 'three'

export interface Step {
  position: Vector3
  rotation: Euler
  scale: number
}

export const item3DStepsDesktop: Step[] = [
  {
    position: new Vector3(0, 0, 2.5),
    rotation: new Euler(0, Math.PI * 0.15, 0),
    scale: 0.045,
  },
  {
    position: new Vector3(4, -0.4, 3),
    rotation: new Euler(-Math.PI / 4, -Math.PI * 0.85, -Math.PI / 4),
    scale: 0.05,
  },
  {
    position: new Vector3(0, 0, 0),
    rotation: new Euler(0, Math.PI, 0),
    scale: 0.03,
  },
  {
    position: new Vector3(-2.15, 0.4, 0),
    rotation: new Euler(Math.PI / 4, Math.PI * 0.75, Math.PI / 4),
    scale: 0.04,
  },
  {
    position: new Vector3(2.25, 1.75, 0),
    rotation: new Euler(0, Math.PI * 1.5, 0),
    scale: 0.045,
  },
]

export const item3DStepsMobile: Step[] = [
  {
    position: new Vector3(0, 0, 1.5), // Position plus proche pour mobile
    rotation: new Euler(0, Math.PI * 0.15, 0),
    scale: 0.035, // Scale plus petit pour mobile
  },
  {
    position: new Vector3(0, 0, 1.5), // Positions ajustées pour écran plus petit
    rotation: new Euler(-Math.PI / 4, -Math.PI * 0.85, -Math.PI / 4),
    scale: 0.04,
  },
  {
    position: new Vector3(0, 0, 0),
    rotation: new Euler(0, Math.PI, 0),
    scale: 0.025,
  },
  {
    position: new Vector3(-1.5, 0.2, 0),
    rotation: new Euler(Math.PI / 4, Math.PI * 0.75, Math.PI / 4),
    scale: 0.03,
  },
  {
    position: new Vector3(1.5, 1, 0),
    rotation: new Euler(0, Math.PI * 1.5, 0),
    scale: 0.035,
  },
]

// Fonction utilitaire pour obtenir les steps en fonction de la taille d'écran
export const getitem3DSteps = (isMobile: boolean): Step[] => {
  return isMobile ? item3DStepsMobile : item3DStepsDesktop
}