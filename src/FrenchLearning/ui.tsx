import React from "react";
import { COLORS, SOFT_SHADOW } from "./theme";

// A rounded pill used for word chips and small labels.
export const Pill: React.FC<{
  children: React.ReactNode;
  bg?: string;
  color?: string;
  fontSize?: number;
  style?: React.CSSProperties;
}> = ({ children, bg = COLORS.white, color = COLORS.ink, fontSize = 40, style }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      padding: "18px 34px",
      borderRadius: 999,
      background: bg,
      color,
      fontSize,
      fontWeight: 600,
      boxShadow: SOFT_SHADOW,
      whiteSpace: "nowrap",
      ...style,
    }}
  >
    {children}
  </div>
);

// The big circular numbered badge used on tip scenes.
export const NumberBadge: React.FC<{ n: number; bg: string }> = ({ n, bg }) => (
  <div
    style={{
      width: 132,
      height: 132,
      borderRadius: "50%",
      background: bg,
      color: COLORS.white,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 74,
      fontWeight: 700,
      boxShadow: SOFT_SHADOW,
    }}
  >
    {n}
  </div>
);

// A soft rounded content card.
export const Card: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => (
  <div
    style={{
      background: "rgba(255,255,255,0.72)",
      backdropFilter: "blur(4px)",
      borderRadius: 44,
      padding: "56px 72px",
      boxShadow: SOFT_SHADOW,
      ...style,
    }}
  >
    {children}
  </div>
);
