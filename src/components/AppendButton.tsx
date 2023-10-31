import { IconButton } from '@chakra-ui/react';
import { AppendIcon } from './icons/AppendIcon';

export const AppendButton = () => {
  return (
    <IconButton
      width="64px"
      height="64px"
      aria-label="ラメントを追加"
      colorScheme="theme.primary"
      icon={<AppendIcon />}
      isRound={true}
    />
  );
};
