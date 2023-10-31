import { Image } from '@chakra-ui/react';

export const CoverImage = () => {
  return (
    <Image
      width="inherit"
      height="160px"
      objectFit="cover"
      alt="カバー画像"
      src="cover-example.png"
    />
  );
};
