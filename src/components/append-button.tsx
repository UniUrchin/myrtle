import { IconButton } from '@chakra-ui/react';
import { AppendIcon } from './icons/append-icon';

export const AppendButton = () => {
  return (
    <IconButton
      aria-label="ラメントを追加"
      isRound={true}
      colorScheme="theme.primary"
      icon={<AppendIcon />}
      width="64px"
      height="64px"
    />
  );
};
