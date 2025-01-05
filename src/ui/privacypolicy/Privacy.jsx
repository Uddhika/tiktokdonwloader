import React from 'react';
import { Text, List, Box } from '@chakra-ui/react';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';

const Privacy = () => {
  return (
    <>
      <NavBar />
      <Box px={3} my={10}>
        <Text fontWeight="Bold" my={5} textStyle="5xl">
          Privacy Policy
        </Text>
        <Text>
          At TikTik, we respect your privacy. This Privacy Policy outlines how
          we collect, use, and protect your personal information. By using our
          app, you agree to the terms outlined in this policy.
        </Text>
        <Text fontWeight="Bold" my={5}>
          Information We Collect
        </Text>
        <List.Root>
          <List.Item>
            Personal Information: We do not collect personal information like
            name, email, or phone number unless explicitly provided.
          </List.Item>
          <List.Item>
            Usage Data: We may collect non-personally identifiable data about
            your interactions with our app, such as device type, operating
            system, IP address, and app usage patterns.
          </List.Item>
        </List.Root>
        <Text fontWeight="Bold" my={5}>
          How We Use Your Data
        </Text>
        <Text>
          The information we collect is used to improve the app experience,
          offer personalized features, and provide relevant content. We do not
          sell, share, or rent your personal information to third parties.
        </Text>
        <Text fontWeight="Bold" my={5}>
          Cookies
        </Text>
        <Text>
          Our app may use cookies to enhance functionality and user experience.
          You can manage cookie settings through your device settings.
        </Text>
        <Text fontWeight="Bold" my={5}>
          Data Security
        </Text>
        <Text>
          We take reasonable measures to protect your data and ensure its
          security. However, no system is 100% secure, so we cannot guarantee
          complete protection.
        </Text>

        <Text fontWeight="Bold" my={5}>
          Your Rights
        </Text>
        <Text>
          You have the right to access, update, or delete any personal
          information we have collected, subject to legal requirements.
        </Text>

        <Text fontWeight="Bold" my={5}>
          Changes to This Privacy Policy
        </Text>
        <Text>
          We take reasonable measures to protect your data and ensure its
          security. We may update this Privacy Policy periodically. All changes
          will be posted here with a revised date.
        </Text>
      </Box>
      <Footer />
    </>
  );
};

export default Privacy;
