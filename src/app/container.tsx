import { Flex } from '@chakra-ui/react';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      justify="center"
      width="100%"
      height="100vh"
      backgroundColor="background.tertiary"
    >
      {children}
    </Flex>
  );
};
