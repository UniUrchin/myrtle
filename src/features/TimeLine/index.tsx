import { Flex } from '@chakra-ui/react';
import { AppendButton } from '@/components/AppendButton';
import { CoverImage } from '@/components/CoverImage';

export const TimeLine = () => {
  return (
    <Flex maxWidth="390px" background="background.secondary.700">
      <CoverImage />
    </Flex>
  );
};
