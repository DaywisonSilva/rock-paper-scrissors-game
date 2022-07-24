import { css } from "@stitches/core";

const StyledHand = css({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "15px solid #4a68fa",
  variants: {
    type: {
      paper: {
        borderColor: "#4a68fa"
      },
      rock: {
        borderColor: "#e0405e"
      },
      scissors: {
        borderColor: "#eaa727"
      }
    }
  }
});

export { StyledHand };
