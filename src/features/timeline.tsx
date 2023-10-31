import { Flex } from '@chakra-ui/react';
import { AppendButton } from '@/components/append-button';
import { CoverImage } from '@/components/cover-image';

export const TimeLine = () => {
  return (
    <Flex
      height="100vh"
      width="100%"
      maxWidth="390px"
      background="background.secondary.700"
    >
      <CoverImage />
    </Flex>
  );
};
