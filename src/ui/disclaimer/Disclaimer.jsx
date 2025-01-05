import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';

const Disclaimer = () => {
  return (
    <>
      <NavBar />
      <Box px={3} my={10} height="90vh">
        <Text fontWeight="Bold" my={5} textStyle="5xl">
          Disclaimer
        </Text>
        <Text>
          TikTik is a third-party tool that allows users to download TikTok
          videos. We are not affiliated with TikTok, and the app is intended
          solely for personal, non-commercial use. We are not responsible for
          any misuse of downloaded content or violations of copyright laws.
        </Text>
        <Text fontWeight="Bold" my={5}>
          No Liability for Content
        </Text>
        <Text>
          We are not responsible for the content of third-party websites or any
          content you download through our app. It is your responsibility to
          ensure that you comply with all applicable laws when downloading and
          using videos.
        </Text>
        <Text fontWeight="Bold" my={5}>
          App Availability
        </Text>
        <Text>
          We do our best to keep the app running smoothly. However, we cannot
          guarantee uninterrupted or error-free service. We are not liable for
          any service disruptions or downtime.
        </Text>
      </Box>
      <Footer />
    </>
  );
};

export default Disclaimer;
