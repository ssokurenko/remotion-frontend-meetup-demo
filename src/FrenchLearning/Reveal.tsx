import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  scaleFrom?: number;
  bounce?: boolean;
  style?: React.CSSProperties;
};

/**
 * Entrance wrapper for arbitrary JSX (cards, pills, badges) — the counterpart to
 * remotion-bits' AnimatedText, which only accepts string children.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  duration = 22,
  y = 40,
  scaleFrom = 0.85,
  bounce = true,
  style,
}) => {
  const frame = useCurrentFrame();
  const local = frame - delay;

  const easing = bounce
    ? Easing.bezier(0.34, 1.56, 0.64, 1) // gentle overshoot
    : Easing.out(Easing.cubic);

  const progress = interpolate(local, [0, duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing,
  });

  const opacity = interpolate(local, [0, duration * 0.6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        translate: `0px ${(1 - progress) * y}px`,
        scale: String(scaleFrom + (1 - scaleFrom) * progress),
        ...style,
      }}
    >
      {children}
    </div>
  );
};
