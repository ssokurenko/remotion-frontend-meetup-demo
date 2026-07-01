import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Background } from "./Background";
import { HookScene } from "./scenes/HookScene";
import { CognateSecretScene } from "./scenes/CognateSecretScene";
import { CognateShowcaseScene } from "./scenes/CognateShowcaseScene";
import { TipScene, TIPS } from "./scenes/TipScene";
import { OutroScene } from "./scenes/OutroScene";
import { COLORS } from "./theme";

// 30fps timeline. Each scene declares its length; offsets are derived purely.
const SCENES: { name: string; duration: number; node: React.ReactNode }[] = [
  { name: "Hook", duration: 150, node: <HookScene /> }, // 5s
  { name: "Cognate secret", duration: 210, node: <CognateSecretScene /> }, // 7s
  { name: "Cognate showcase", duration: 300, node: <CognateShowcaseScene /> }, // 10s
  ...TIPS.map((tip) => ({
    name: `Tip ${tip.n}`,
    duration: 210, // 7s each
    node: <TipScene {...tip} />,
  })),
  { name: "Outro", duration: 300, node: <OutroScene /> }, // 10s
];

// Pure cumulative offsets — no mutation during render (safe under concurrent mode).
const OFFSETS = SCENES.reduce<number[]>((acc, scene, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + SCENES[i - 1].duration);
  return acc;
}, []);

export const FRENCH_DURATION = SCENES.reduce((sum, s) => sum + s.duration, 0);

export const FrenchLearning: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.cream }}>
      <Background />

      {SCENES.map((scene, i) => (
        <Sequence
          key={scene.name}
          name={scene.name}
          from={OFFSETS[i]}
          durationInFrames={scene.duration}
        >
          {scene.node}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
