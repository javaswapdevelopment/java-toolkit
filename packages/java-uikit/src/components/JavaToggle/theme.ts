import { darkColors, lightColors } from "../../theme/colors";
import { JavaToggleTheme } from "./types";

export const light: JavaToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: JavaToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
