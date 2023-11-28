import { Avatar, AvatarProps } from '@chakra-ui/react';

type ProfileAvatorProps = AvatarProps;

export const ProfileAvator = ({ ...props }: ProfileAvatorProps) => {
  return (
    <Avatar
      width="120px"
      height="120px"
      border="4px"
      borderColor="background.secondary.500"
      src="/penguin-avatar.png"
      {...props}
    />
  );
};
