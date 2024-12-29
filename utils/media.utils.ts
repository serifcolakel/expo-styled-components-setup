import { css } from "styled-components/native";

import {
  isAndroid,
  isIOS,
  isLandscape,
  isPortrait,
  isWeb,
} from "./platform.utils";
import { width } from "./screen.utils";

const breakPoints = {
  sm: 360,
  md: 768,
  lg: 1024,
};

/**
 * @description A utility function to apply styles based on the screen size
 */
const MediaQuery = {
  select: (styles: {
    sm?: string;
    md?: string;
    lg?: string;
    ios?: string;
    android?: string;
    web?: string;
    portrait?: string;
    landscape?: string;
    smallScreen?: string;
    mediumScreen?: string;
    largeScreen?: string;
  }) => css`
    ${width <= breakPoints.sm && styles.sm ? styles.sm : ""}
    ${width > breakPoints.sm && width <= breakPoints.md && styles.md
      ? styles.md
      : ""}
      ${width > breakPoints.md && styles.lg ? styles.lg : ""}
      ${isIOS() && styles.ios ? styles.ios : ""}
      ${isAndroid() && styles.android ? styles.android : ""}
      ${isWeb() && styles.web ? styles.web : ""}
      ${isPortrait() && styles.portrait ? styles.portrait : ""}
      ${isLandscape() && styles.landscape ? styles.landscape : ""}
      ${width <= breakPoints.sm && styles.smallScreen ? styles.smallScreen : ""}
      ${width > breakPoints.sm && width <= breakPoints.md && styles.mediumScreen
      ? styles.mediumScreen
      : ""}
      ${width > breakPoints.md && styles.largeScreen ? styles.largeScreen : ""}
  `,
  isAndroid,
  isIOS,
  isLandscape,
  isPortrait,
  isWeb,
};

export { MediaQuery };
