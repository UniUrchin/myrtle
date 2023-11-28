import { Text } from '@chakra-ui/react';

type NormalTextProps = {
  children: React.ReactNode;
  color?: string;
};

export const NormalText = ({
  children,
  color = 'text.primary',
}: NormalTextProps) => {
  return (
    <Text color={color} fontSize="16px" lineHeight="auto">
      {children}
    </Text>
  );
};
