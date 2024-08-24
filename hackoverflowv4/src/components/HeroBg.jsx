import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#CE84CF", "#DD335C"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative flex items-center justify-center min-h-screen w-full overflow-hidden bg-gray-950"
    >
      <div className="absolute inset-0 pointer-events-none">
        <Canvas style={{ height: '695px', width: '100%' }}>
          <Stars radius={1} count={2500} factor={2} fade speed={3} />
        </Canvas>
      </div>
    </motion.section>
  );
};
