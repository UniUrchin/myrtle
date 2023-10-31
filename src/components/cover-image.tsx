import { Image } from '@chakra-ui/react';

export const CoverImage = () => {
  return (
    <Image
      height="160px"
      width="inherit"
      objectFit="cover"
      src="cover-example.png"
      alt="カバー画像"
    />
  );
};
