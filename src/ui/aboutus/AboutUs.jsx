import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <Box px={3} my={10} height="60vh">
        <Text fontWeight="Bold" my={5} textStyle="5xl">
          About Us
        </Text>
        <Text>
          Welcome to TikTik! Our mission is to provide a fast, reliable, and
          easy way to download TikTok videos for offline viewing. We understand
          how much people love sharing and saving content, and we’re here to
          help. With our app, you can quickly download your favorite TikTok
          videos in high-quality formats without any hassle. We prioritize user
          experience, security, and privacy to ensure your time with us is
          seamless and enjoyable.
        </Text>
      </Box>
      <Footer />
    </>
  );
};

export default AboutUs;
