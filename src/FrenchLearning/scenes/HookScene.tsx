import React from "react";
import { AnimatedText } from "remotion-bits";
import { Scene } from "../Scene";
import { Reveal } from "../Reveal";
import { Pill } from "../ui";
import { COLORS } from "../theme";

export const HookScene: React.FC = () => {
  return (
    <Scene>
      <AnimatedText
        transition={{
          opacity: [0, 1],
          y: [30, 0],
          duration: 18,
          easing: "easeOutCubic",
        }}
        style={{ display: "block", fontSize: 44, fontWeight: 600, color: COLORS.blue }}
      >
        Learn French for English speakers
      </AnimatedText>

      <AnimatedText
        transition={{
          opacity: [0, 1],
          y: [70, 0],
          scale: [0.8, 1],
          duration: 26,
          delay: 8,
          easing: "spring",
          split: "word",
          splitStagger: 5,
        }}
        style={{
          display: "block",
          fontSize: 150,
          fontWeight: 700,
          lineHeight: 1.02,
          margin: "24px 0 40px",
          color: COLORS.ink,
        }}
      >
        No language school required
      </AnimatedText>

      <Reveal delay={36} y={30}>
        <Pill bg={COLORS.sunny} color={COLORS.ink} fontSize={48}>
          🥐 Teach yourself from home 🗼
        </Pill>
      </Reveal>
    </Scene>
  );
};
