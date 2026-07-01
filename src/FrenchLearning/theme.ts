import { loadFont } from "@remotion/google-fonts/Fredoka";

// Playful rounded typeface for the whole video.
const { fontFamily } = loadFont();

export const FONT = fontFamily;

// Warm, friendly pastel palette with French-flag accents (bleu-blanc-rouge).
export const COLORS = {
  cream: "#FFF9F0",
  ink: "#2B2D42", // readable deep-navy text
  inkSoft: "#5C6070",
  blue: "#3B5BDB", // French bleu
  red: "#FA5252", // French rouge
  peach: "#FFC078",
  coral: "#FF8787",
  mint: "#20C997",
  sky: "#4DABF7",
  sunny: "#FFD43B",
  plum: "#B197FC",
  white: "#FFFFFF",
} as const;

// Ambient background gradients the whole piece slowly drifts between.
export const BG_GRADIENTS = [
  "linear-gradient(135deg, #FFF3E0 0%, #FFE3EC 50%, #E7F0FF 100%)",
  "linear-gradient(135deg, #E7F5FF 0%, #FFF0F6 50%, #FFF9DB 100%)",
  "linear-gradient(135deg, #FFF0F6 0%, #F3F0FF 50%, #E6FCF5 100%)",
  "linear-gradient(135deg, #FFF3E0 0%, #FFE3EC 50%, #E7F0FF 100%)",
];

// Reusable soft drop shadow for cards / chips.
export const SOFT_SHADOW = "0 18px 40px rgba(43, 45, 66, 0.12)";
