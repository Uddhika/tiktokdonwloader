import React from 'react';
import { Text, List, Box } from '@chakra-ui/react';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';

const Terms = () => {
  return (
    <>
      <NavBar />
      <Box px={3} my={10}>
        <Text fontWeight="Bold" my={5} textStyle="5xl">
          Terms and Conditions
        </Text>
        <Text>
          By using TikTik, you agree to abide by the following terms and
          conditions. These terms govern your use of the app, and we encourage
          you to read them carefully.
        </Text>
        <Text fontWeight="Bold" my={5}>
          License
        </Text>
        <Text>
          We grant you a limited, non-exclusive, and non-transferable license to
          use our app for personal, non-commercial purposes.
        </Text>
        <Text fontWeight="Bold" my={5}>
          Prohibited Use
        </Text>
        <List.Root>
          <List.Item>
            You may not use the app for illegal activities, including
            downloading copyrighted content without proper authorization.
          </List.Item>
          <List.Item>
            You must not attempt to reverse engineer, decompile, or modify the
            app.
          </List.Item>
        </List.Root>
        <Text fontWeight="Bold" my={5}>
          Third-Party Content
        </Text>
        <Text>
          TikTik allows users to download TikTok videos, but you are responsible
          for ensuring that any downloaded content is not copyrighted or
          violates intellectual property rights.
        </Text>
        <Text fontWeight="Bold" my={5}>
          Termination
        </Text>
        <Text>
          We may suspend or terminate your access to the app if you violate
          these terms.
        </Text>
        <Text fontWeight="Bold" my={5}>
          Disclaimer of Warranties
        </Text>
        <Text>
          We provide our app "as is" without any warranties. We do not guarantee
          uninterrupted access or error-free performance.
        </Text>

        <Text fontWeight="Bold" my={5}>
          Limitation of Liability
        </Text>
        <Text>
          We are not liable for any damages or losses arising from the use or
          inability to use the app.
        </Text>

        <Text fontWeight="Bold" my={5}>
          Governing Law
        </Text>
        <Text>These terms are governed by the laws</Text>
      </Box>
      <Footer />
    </>
  );
};

export default Terms;
