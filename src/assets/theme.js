const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};

const fontSizes = {
  lgTitle: "26px",
  navTitle: "16px",
  mdTitle: "14px",
  navSubtitle: "12px",
};

const colors = {
  black: "#000000",
  fontBlack: "#3A474E",
  fontGrey: "#94A2AD",
  borderGrey: "#D1D8DC",
  grey: "#F6F7F8",
  lightGrey: "#EDEFF1",
  white: "#ffffff",
  blue: "#586CF5",
};

const theme = {
  common,
  fontSizes,
  colors,
};

export default theme;
