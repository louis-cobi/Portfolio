import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useScroll } from "../hooks/use-scroll";
import { item4Steps } from "../constants/item4Steps";
import { mapRange } from "../utils/math";
import { CustomMaterial } from "./material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Item4 = () => {
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

    const current = thresholds.findIndex((v) => scroll < v) - 1;
    const start = thresholds[current];
    const end = thresholds[current + 1];
    const progress = mapRange(start, end, scroll, 0, 1);

    const from = item4Steps[current];
    const to = item4Steps[current + 1];

    if (!to) return;

    const _scale = mapRange(0, 1, progress, from.scale, to.scale);
    const _position = new THREE.Vector3(
      viewport.width * mapRange(0, 1, progress, from.position.x, to.position.x),
      viewport.height * mapRange(0, 1, progress, from.position.y, to.position.y),
      mapRange(0, 1, progress, from.position.z, to.position.z)
    );
    const _rotation = new THREE.Euler(
      mapRange(0, 1, progress, from.rotation.x, to.rotation.x),
      mapRange(0, 1, progress, from.rotation.y, to.rotation.y),
      mapRange(0, 1, progress, from.rotation.z, to.rotation.z)
    );

    groupRef.current.scale.setScalar(viewport.height * _scale);
    groupRef.current.position.copy(_position);
    groupRef.current.rotation.copy(_rotation);

    setCurrentStep(current);
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
