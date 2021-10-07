import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jefferson Soares</Text>
          <Text color="gray.300" fontSize="small">
            jefferson1104junior@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Jefferson Soares" src="https://github.com/jefferson1104.png" />
    </Flex>
  );
}