import React from 'react';
import { Image, Box, SimpleGrid, Card, Text } from '@chakra-ui/react';
import unlimited from '../../assets/unlimited.svg';
import multiple from '../../assets/multiple.svg';
import nowatermark from '../../assets/nowatermark.svg';
import easytouse from '../../assets/easytouse.svg';

const Features = () => {
  const cardData = [
    {
      id: 1,
      title: 'Multiple Downloads at Once',
      description:
        'No more waiting in line to download one video at a time. Select your favorite TikTok videos and download them all simultaneously in just a click!',
      image: multiple,
    },
    {
      id: 2,
      title: 'Unlimited Downloads',
      description:
        'Download as many TikTok videos as you want, without any restrictions. Enjoy unlimited access for free!',
      image: unlimited,
    },
    {
      id: 3,
      title: 'No Watermark',
      description:
        'Get clean, watermark-free videos ready to share or store in your personal collection.',
      image: nowatermark,
    },
    {
      id: 4,
      title: 'Easy to Use',
      description:
        'A seamless and user-friendly interface designed to make downloading TikTok videos quick and hassle-free.',
      image: easytouse,
    },
  ];
  return (
    <>
      <Text py="10" textAlign="center" textStyle="4xl" fontWeight="bold">
        Why TikTik?
      </Text>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 4 }}
        p={{ base: 2, sm: 4 }}
        gap={5}
      >
        {cardData.map((card) => (
          <Box key={card.id}>
            <Card.Root
              width={{ base: '100%', sm: '100%', md: '100%', lg: '100%' }}
              boxShadow="md"
              overflow="hidden"
            >
              <Image
                src={card.image}
                alt={card.title}
                objectFit="fit"
                width="100%"
                height="200px"
              />
              <Card.Body gap="2">
                <Card.Title textAlign="center">{card.title}</Card.Title>
                <Card.Description textAlign="center">
                  {card.description}
                </Card.Description>
              </Card.Body>
            </Card.Root>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Features;
