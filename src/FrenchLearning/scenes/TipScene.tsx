import React from "react";
import { AnimatedText } from "remotion-bits";
import { Scene } from "../Scene";
import { Reveal } from "../Reveal";
import { Card, NumberBadge, Pill } from "../ui";
import { COLORS } from "../theme";

export type TipSceneProps = {
  n: number;
  accent: string;
  emoji: string;
  kicker: string;
  title: string;
  subtitle: string;
  example: string;
};

export const TipScene: React.FC<TipSceneProps> = ({
  n,
  accent,
  emoji,
  kicker,
  title,
  subtitle,
  example,
}) => {
  return (
    <Scene padding={110}>
      <Card style={{ maxWidth: 1480, width: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
            marginBottom: 20,
          }}
        >
          <Reveal delay={2} y={0} scaleFrom={0.4}>
            <NumberBadge n={n} bg={accent} />
          </Reveal>
          <Reveal delay={8} y={0} scaleFrom={0.4}>
            <div style={{ fontSize: 120, lineHeight: 1 }}>{emoji}</div>
          </Reveal>
        </div>

        <AnimatedText
          transition={{
            opacity: [0, 1],
            duration: 14,
            delay: 6,
            easing: "easeOutCubic",
          }}
          style={{
            display: "block",
            fontSize: 40,
            fontWeight: 600,
            color: accent,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {kicker}
        </AnimatedText>

        <AnimatedText
          transition={{
            opacity: [0, 1],
            y: [46, 0],
            duration: 22,
            delay: 12,
            easing: "spring",
            split: "word",
            splitStagger: 3,
          }}
          style={{
            display: "block",
            fontSize: 104,
            fontWeight: 700,
            lineHeight: 1.05,
            color: COLORS.ink,
            margin: "14px 0 22px",
          }}
        >
          {title}
        </AnimatedText>

        <AnimatedText
          transition={{
            opacity: [0, 1],
            y: [24, 0],
            duration: 20,
            delay: 26,
            easing: "easeOutCubic",
          }}
          style={{
            display: "block",
            fontSize: 52,
            fontWeight: 500,
            color: COLORS.inkSoft,
            lineHeight: 1.25,
          }}
        >
          {subtitle}
        </AnimatedText>

        <Reveal delay={44} y={26} style={{ marginTop: 44 }}>
          <Pill bg={accent} color={COLORS.white} fontSize={46}>
            {example}
          </Pill>
        </Reveal>
      </Card>
    </Scene>
  );
};

export const TIPS: TipSceneProps[] = [
  {
    n: 1,
    accent: COLORS.sky,
    emoji: "🎬",
    kicker: "Tip one",
    title: "Watch with French subtitles",
    subtitle: "Comprehensible input beats grammar drills.",
    example: "Netflix • YouTube • TV5MONDE",
  },
  {
    n: 2,
    accent: COLORS.coral,
    emoji: "🔁",
    kicker: "Tip two",
    title: "Ten minutes of flashcards a day",
    subtitle: "Spaced repetition locks vocabulary in for good.",
    example: "Anki • Duolingo • Memrise",
  },
  {
    n: 3,
    accent: COLORS.mint,
    emoji: "🏷️",
    kicker: "Tip three",
    title: "Label your whole house",
    subtitle: "Sticky notes turn your home into a classroom.",
    example: "la porte • la fenêtre • le lait",
  },
  {
    n: 4,
    accent: COLORS.plum,
    emoji: "🗣️",
    kicker: "Tip four",
    title: "Speak from day one",
    subtitle: "Language-exchange apps beat studying in silence.",
    example: "Tandem • HelloTalk • italki",
  },
];
