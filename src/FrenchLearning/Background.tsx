import React from "react";
import {
  AbsoluteFill,
  interpolate,
  random,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { GradientTransition } from "remotion-bits";
import { BG_GRADIENTS } from "./theme";

const EMOJIS = ["🥐", "🗼", "🧀", "📖", "✨", "🇫🇷", "🍷", "🎨", "☕️", "💬"];

// Gently drifting emoji accents that sit behind the content.
const FloatingEmojis: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, width, height } = useVideoConfig();

  return (
    <AbsoluteFill>
      {EMOJIS.map((emoji, i) => {
        const seed = `emoji-${i}`;
        const baseX = random(seed + "x") * width;
        const baseY = random(seed + "y") * height;
        const size = 44 + random(seed + "s") * 60;
        const drift = 30 + random(seed + "d") * 40;
        const speed = 0.4 + random(seed + "v") * 0.8;
        const phase = random(seed + "p") * Math.PI * 2;

        const t = (frame / durationInFrames) * Math.PI * 2 * speed + phase;
        const x = baseX + Math.sin(t) * drift;
        const y = baseY + Math.cos(t * 0.8) * drift;
        const rotate = Math.sin(t) * 12;

        return (
          <div
            key={emoji}
            style={{
              position: "absolute",
              left: x,
              top: y,
              fontSize: size,
              opacity: 0.16,
              rotate: `${rotate}deg`,
              filter: "saturate(0.9)",
            }}
          >
            {emoji}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Subtle breathing scale so the gradient never feels static.
  const scale = interpolate(
    Math.sin((frame / durationInFrames) * Math.PI * 2),
    [-1, 1],
    [1, 1.06],
  );

  return (
    <AbsoluteFill>
      <GradientTransition
        gradient={BG_GRADIENTS}
        frames={[0, durationInFrames]}
        easing="easeInOut"
        style={{ scale: String(scale) }}
      />
      <FloatingEmojis />
      {/* Soft vignette to keep focus toward the center. */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(43,45,66,0.06) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
