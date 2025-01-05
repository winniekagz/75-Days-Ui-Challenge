
import { tv } from "tailwind-variants";

const imageStyles = tv({
  slots: {
    wrapper: "relative w-full h-64 overflow-hidden",
    baseImage: "absolute inset-0 w-full h-full object-cover scale-105",
    overlay: "absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-70",
    skewShape:
      "absolute -top-10 -left-10 w-72 h-72 bg-pink-500 rotate-45 skew-y-6 opacity-80",
    rotateShape:
      "absolute bottom-0 right-0 w-48 h-48 bg-blue-500 rotate-12 opacity-60",
  },
});

export const { wrapper, baseImage, overlay, skewShape, rotateShape } = imageStyles();