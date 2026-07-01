import React from "react";
import { AnimatedCounter, AnimatedText } from "remotion-bits";
import { Scene } from "../Scene";
import { Reveal } from "../Reveal";
import { Pill } from "../ui";
import { COLORS } from "../theme";

export const CognateSecretScene: React.FC = () => {
  return (
    <Scene>
      <AnimatedText
        transition={{
          opacity: [0, 1],
          y: [24, 0],
          duration: 16,
          easing: "easeOutCubic",
        }}
        style={{ display: "block", fontSize: 52, fontWeight: 600, color: COLORS.inkSoft }}
      >
        Here's the secret 🤫
      </AnimatedText>

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center",
          gap: 8,
          margin: "10px 0 4px",
        }}
      >
        <AnimatedCounter
          transition={{
            values: [0, 1700],
            duration: 68,
            delay: 18,
            easing: "easeOutCubic",
          }}
          postfix={
            <span style={{ color: COLORS.red, fontWeight: 700 }}>+</span>
          }
          style={{
            fontSize: 300,
            fontWeight: 700,
            color: COLORS.blue,
            fontVariantNumeric: "tabular-nums",
          }}
        />
      </div>

      <AnimatedText
        transition={{
          opacity: [0, 1],
          y: [40, 0],
          duration: 22,
          delay: 30,
          easing: "spring",
          split: "word",
          splitStagger: 3,
        }}
        style={{ display: "block", fontSize: 92, fontWeight: 700, color: COLORS.ink }}
      >
        French words you already know
      </AnimatedText>

      <Reveal delay={70} y={28} style={{ marginTop: 44 }}>
        <Pill bg={COLORS.mint} color={COLORS.white} fontSize={46}>
          ✨ Up to 30% of English comes from French
        </Pill>
      </Reveal>
    </Scene>
  );
};
