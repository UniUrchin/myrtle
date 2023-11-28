import { Heading } from '@chakra-ui/react';

type HeadingText2Props = {
  children: React.ReactNode;
  color?: string;
};

export const HeadingText2 = ({
  children,
  color = 'text.primary',
}: HeadingText2Props) => {
  return (
    <Heading color={color} fontSize="24px" lineHeight="auto">
      {children}
    </Heading>
  );
};
