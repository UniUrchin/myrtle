import { Text } from '@chakra-ui/react';

type NormalTextBoldProps = {
  children: React.ReactNode;
  color?: string;
};

export const NormalTextBold = ({
  children,
  color = 'text.primary',
}: NormalTextBoldProps) => {
  return (
    <Text color={color} fontSize="16px" fontWeight="bold" lineHeight="auto">
      {children}
    </Text>
  );
};
