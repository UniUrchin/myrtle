import { Avatar, AvatarProps } from '@chakra-ui/react';

type ProfileAvatorProps = AvatarProps & {
  avatarName: string;
};

export const ProfileAvator = ({ avatarName, ...props }: ProfileAvatorProps) => {
  return (
    <Avatar
      width="120px"
      height="120px"
      border="4px"
      borderColor="background.secondary.500"
      name={avatarName}
      src="/penguin-avatar.png"
      {...props}
    />
  );
};
