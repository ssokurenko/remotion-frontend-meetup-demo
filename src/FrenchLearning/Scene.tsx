import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { FONT, COLORS } from "./theme";

/**
 * Wraps a scene so it fades (and gently lifts) in at its start and out at its
 * end, based on the enclosing Sequence's local duration.
 */
export const Scene: React.FC<{
  children: React.ReactNode;
  padding?: number;
}> = ({ children, padding = 120 }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const fade = 12;

  const opacity = interpolate(
    frame,
    [0, fade, durationInFrames - fade, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const translateY = interpolate(
    frame,
    [durationInFrames - fade, durationInFrames],
    [0, -24],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        fontFamily: FONT,
        color: COLORS.ink,
        opacity,
        translate: `0px ${translateY}px`,
        padding,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
