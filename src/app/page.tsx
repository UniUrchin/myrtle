import { Flex } from '@chakra-ui/react';
import { Profile } from '@/features/Profile';

export default function AppPage() {
  return (
    <Flex
      flexDirection="column"
      width="390px"
      background="background.secondary.700"
    >
      <Profile />
    </Flex>
  );
}
