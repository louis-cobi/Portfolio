import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useScroll } from "../../hooks/use-scroll";
// import { item3DSteps, item3DStepsMobile } from "../constants/item3DSteps";
import { useIsMobile } from "../../hooks/use-isMobile";
import { getitem3DSteps } from "../../constants/item3DSteps";
import { mapRange } from "../../utils/math";
import { CustomMaterial } from "./material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Item3D = () => {
  const isMobile = useIsMobile()
  const steps = getitem3DSteps(isMobile)
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const cone1Ref = useRef<THREE.Mesh>(null);
  const cone2Ref = useRef<THREE.Mesh>(null);

  const thresholds = useMemo(() => {
    // Définissez vos seuils de défilement ici
    return [0, 0.25, 0.5, 0.75, 1];
  }, []);

  useGSAP(() => {
    if (
      ring1Ref.current &&
      ring2Ref.current &&
      cone1Ref.current &&
      cone2Ref.current &&
      groupRef.current
    ) {
      gsap
        .timeline({
          repeat: -1,
        })
        .to(
          ring1Ref.current.rotation,
          {
            z: `+=${Math.PI * 2}`,
            x: `+=${Math.PI * 2}`,
            duration: 4,
            ease: "none",
          },
          0
        )
        .to(
          ring2Ref.current.rotation,
          {
            z: `-=${Math.PI * 2}`,
            x: `-=${Math.PI * 2}`,
            ease: "none",
            duration: 4,
          },
          0
        )
        .to(
          groupRef.current.rotation,
          {
            y: Math.PI * 2,
            duration: 4,
            ease: "none",
          },
          0
        );
    }
  }, []);

  useScroll(({ scroll }) => {
    if (!groupRef.current) return;

    const scrollProgress = scroll / (document.documentElement.scrollHeight - window.innerHeight);
    const currentStep = Math.floor(scrollProgress * (steps.length - 1));
    const stepProgress = (scrollProgress * (steps.length - 1)) % 1;

    const from = steps[currentStep];
    const to = steps[Math.min(currentStep + 1, steps.length - 1)];

    const _scale = THREE.MathUtils.lerp(from.scale, to.scale, stepProgress);
    const _position = new THREE.Vector3().lerpVectors(from.position, to.position, stepProgress);
    const _rotation = new THREE.Euler().setFromVector3(
      new THREE.Vector3().lerpVectors(
        new THREE.Vector3(from.rotation.x, from.rotation.y, from.rotation.z),
        new THREE.Vector3(to.rotation.x, to.rotation.y, to.rotation.z),
        stepProgress
      )
    );

    gsap.to(groupRef.current.scale, { 
      x: viewport.height * _scale, 
      y: viewport.height * _scale, 
      z: viewport.height * _scale, 
      overwrite: "auto", 
      duration: 0.1 
    });
    gsap.to(groupRef.current.position, { 
      x: _position.x, 
      y: _position.y, 
      z: _position.z, 
      overwrite: "auto", 
      duration: 0.1 
    });
    gsap.to(groupRef.current.rotation, { 
      x: _rotation.x, 
      y: _rotation.y, 
      z: _rotation.z, 
      overwrite: "auto", 
      duration: 0.1 
    });

    setCurrentStep(currentStep);
  });

  return (
    <group ref={groupRef}>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.1, 0.1]} />
        <CustomMaterial />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.1]} />
        <CustomMaterial />
      </mesh>
      <group scale={0.8}>
        <mesh ref={cone1Ref} position={[0, 1, 0]}>
          <coneGeometry args={[1, 1.41, 4]} />
          <CustomMaterial />
        </mesh>
        <mesh ref={cone2Ref} position={[0, -1, 0]} rotation={[-Math.PI, 0, 0]}>
          <coneGeometry args={[1, 1.41, 4]} />
          <CustomMaterial />
        </mesh>
      </group>
    </group>
  );
};
