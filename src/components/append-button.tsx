import { IconButton } from '@radix-ui/themes';
import { AppendIcon } from '@/components/icons/append-icon';

export const AppendButton = () => {
  return (
    <IconButton className="bg-theme h-16 w-16" radius="full">
      <AppendIcon />
    </IconButton>
  );
};
