import React from "react";
import { AnimatedText } from "remotion-bits";
import { Scene } from "../Scene";
import { Reveal } from "../Reveal";
import { Pill } from "../ui";
import { COLORS } from "../theme";

export const OutroScene: React.FC = () => {
  return (
    <Scene>
      <AnimatedText
        transition={{
          opacity: [0, 1],
          y: [24, 0],
          duration: 16,
          easing: "easeOutCubic",
        }}
        style={{ display: "block", fontSize: 56, fontWeight: 600, color: COLORS.inkSoft }}
      >
        No classroom. No problem.
      </AnimatedText>

      <AnimatedText
        transition={{
          opacity: [0, 1],
          y: [80, 0],
          scale: [0.8, 1],
          duration: 28,
          delay: 10,
          easing: "spring",
          split: "character",
          splitStagger: 2,
        }}
        style={{
          display: "block",
          fontSize: 180,
          fontWeight: 700,
          lineHeight: 1.0,
          margin: "18px 0 8px",
          color: COLORS.blue,
        }}
      >
        Bonne chance !
      </AnimatedText>

      <AnimatedText
        transition={{
          opacity: [0, 1],
          y: [30, 0],
          duration: 20,
          delay: 40,
          easing: "easeOutCubic",
        }}
        style={{ display: "block", fontSize: 64, fontWeight: 600, color: COLORS.ink }}
      >
        You already have a head start 🇫🇷
      </AnimatedText>

      <Reveal delay={60} y={30} style={{ marginTop: 48 }}>
        <Pill bg={COLORS.red} color={COLORS.white} fontSize={50}>
          ✨ Un petit peu chaque jour — a little every day
        </Pill>
      </Reveal>
    </Scene>
  );
};
