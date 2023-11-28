import { Box, Flex } from '@chakra-ui/react';
import { ProfileAvator } from './components/ProfileAvator';
import { HeadingText2 } from '@/components/fonts/HeadingText2';
import { NormalText } from '@/components/fonts/NormalText';
import { NormalTextBold } from '@/components/fonts/NormalTextBold';
import { SettingIcon } from '@/components/icons/SettingIcon';
import { ProfileCoverImage } from '@/features/Profile/components/ProfileCoverImage';

export const Profile = () => {
  return (
    <Flex flexDirection="column">
      <ProfileCoverImage />
      <Flex
        position="relative"
        flexDirection="column"
        gap="16px"
        padding="16px"
        background="background.secondary.500"
      >
        <ProfileAvator position="absolute" top="-60px" left="16px" />
        <Box marginLeft="auto">
          <SettingIcon />
        </Box>
        <Flex
          flexDirection="column"
          gap="4px"
          paddingTop="8px"
          paddingBottom="8px"
        >
          <HeadingText2>嘆きのぺんぎん</HeadingText2>
          <NormalTextBold color="text.secondary.500">@uniurchin</NormalTextBold>
        </Flex>
        <NormalText>一人で嘆く哀れなぺんぎん。</NormalText>
      </Flex>
    </Flex>
  );
};
