import { Box, Flex, Stack } from "@chakra-ui/react";

import Logo from "components/sidebar/components/Logo";
import Links from "components/sidebar/components/Links";
import React from "react";

// FUNCTIONS

function SidebarContent(props) {
  const { routes } = props;
  // SIDEBAR
  return (
    <Flex
      direction="column"
      height="100%"
      pt="25px"
      px="16px"
      borderRadius="30px"
    >
      <Logo width="200px" height="70px" fSize="38px" />
      <Stack direction="column" mb="auto" mt="8px">
        <Box ps="20px" pe={{ md: "16px", "2xl": "1px" }}>
          <Links routes={routes} />
        </Box>
      </Stack>
    </Flex>
  );
}

export default SidebarContent;
