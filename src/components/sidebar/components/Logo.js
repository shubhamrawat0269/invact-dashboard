import { Flex } from "@chakra-ui/react";
import React from "react";

const Logo = ({ width, height, fSize }) => {
  return (
    <Flex
      align="center"
      direction="column"
      sx={{ width, height, fontSize: fSize, fontWeight: "bolder" }}
    >
      Invact.
    </Flex>
  );
};

export default Logo;
