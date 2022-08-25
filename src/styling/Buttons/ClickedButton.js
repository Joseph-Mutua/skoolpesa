import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const CustomizedButton = styled(Button)`
  color: #000000;
  backgroundcolor: "#fff";
`;

export default function StyledComponents() {
  return <CustomizedButton />;
}
