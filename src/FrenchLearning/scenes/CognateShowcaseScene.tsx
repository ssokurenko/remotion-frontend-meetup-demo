import React from "react";
import { AnimatedText, StaggeredMotion } from "remotion-bits";
import { Scene } from "../Scene";
import { Pill } from "../ui";
import { COLORS } from "../theme";

// Words that are (near) identical in English and French with the same meaning.
const COGNATES = [
  "restaurant",
  "important",
  "culture",
  "nation",
  "impossible",
  "orange",
  "animal",
  "machine",
  "image",
  "silence",
  "question",
  "village",
];

const CHIP_COLORS = [
  COLORS.sky,
  COLORS.coral,
  COLORS.mint,
  COLORS.plum,
  COLORS.peach,
  COLORS.sunny,
];

export const CognateShowcaseScene: React.FC = () => {
  return (
    <Scene padding={100}>
      <AnimatedText
        transition={{
          opacity: [0, 1],
          y: [30, 0],
          duration: 18,
          easing: "easeOutCubic",
          split: "word",
          splitStagger: 3,
        }}
        style={{
          display: "block",
          fontSize: 96,
          fontWeight: 700,
          color: COLORS.ink,
          marginBottom: 12,
        }}
      >
        Same spelling. Same meaning.
      </AnimatedText>

      <AnimatedText
        transition={{
          opacity: [0, 1],
          duration: 16,
          delay: 10,
          easing: "easeOutCubic",
        }}
        style={{ display: "block", fontSize: 44, fontWeight: 500, color: COLORS.inkSoft }}
      >
        🇬🇧 English → 🇫🇷 French, zero effort
      </AnimatedText>

      <StaggeredMotion
        transition={{
          opacity: [0, 1],
          y: [40, 0],
          scale: [0.7, 1],
          duration: 20,
          delay: 26,
          stagger: 4,
          easing: "spring",
        }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 26,
          maxWidth: 1500,
          margin: "56px 0 40px",
        }}
      >
        {COGNATES.map((word, i) => (
          <Pill
            key={word}
            bg={CHIP_COLORS[i % CHIP_COLORS.length]}
            color={COLORS.white}
            fontSize={54}
          >
            {word}
          </Pill>
        ))}
      </StaggeredMotion>

      <AnimatedText
        transition={{
          opacity: [0, 1],
          y: [20, 0],
          duration: 18,
          delay: 84,
          easing: "easeOutCubic",
        }}
        style={{ display: "block", fontSize: 50, fontWeight: 600, color: COLORS.blue }}
      >
        …and thousands more 🎉
      </AnimatedText>
    </Scene>
  );
};
