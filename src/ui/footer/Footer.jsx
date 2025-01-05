import React from 'react';
import {
  Box,
  Text,
  Stack,
  Input,
  Image,
  HStack,
  VStack,
  IconButton,
  Flex,
  Button,
} from '@chakra-ui/react';
import { InputGroup } from '../../components/ui/input-group';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
} from 'react-icons/fa';
import whitelogo from '../../assets/whitelogo.svg';

const Footer = () => {
  return (
    <Box bg="black" color="white" py={7}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={10}
        justify="space-between"
        gap={{ base: 8, md: 0, lg: 0 }}
        px={5}
      >
        {/* Left Section - Logo & Quick Links */}
        <Box>
          <Image src={whitelogo} />
          <VStack spacing={5} mt={5} align="first" ml={1.5}>
            <Text as="a" href="#" _hover={{ textDecoration: 'underline' }}>
              About Us
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: 'underline' }}>
              Privacy Policy
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: 'underline' }}>
              Terms of Service
            </Text>
          </VStack>
        </Box>

        <VStack align="first">
          <Text fontSize="xl" fontWeight="bold">
            Subscribe to our Newsletter
          </Text>
          <Flex gap={2} mt={3} width={{ base: '70%', md: '100%', lg: '100%' }}>
            <Input
              type="email"
              placeholder="Enter your email"
              color="white"
              _placeholder={{ color: 'gray.500' }}
            />
            <Button ml={2} colorScheme="blue">
              Subscribe
            </Button>
          </Flex>
        </VStack>

        {/* Right Section - Social Media Links */}
        <Box ml={1.5}>
          <Text fontSize="xl" fontWeight="bold">
            Follow Us
          </Text>
          <HStack spacing={5} mt={5}>
            <Button
              isRound
              variant="outline"
              colorScheme="facebook"
              aria-label="Facebook"
              p={0}
            >
              <FaFacebook />
            </Button>
            <Button
              isRound
              variant="outline"
              colorScheme="twitter"
              aria-label="Twitter"
              p={0}
            >
              <FaTwitter />
            </Button>
            <Button
              isRound
              variant="outline"
              colorScheme="pink"
              aria-label="Instagram"
              p={0}
            >
              <FaInstagram />
            </Button>
            <Button
              isRound
              variant="outline"
              colorScheme="linkedin"
              aria-label="LinkedIn"
              p={0}
            >
              <FaLinkedin />
            </Button>
          </HStack>
        </Box>
      </Stack>

      {/* Bottom Section - Copyright */}
      <Box mt={10} textAlign="center">
        <Text fontSize="sm" color="gray.500">
          © {new Date().getFullYear()} TikTik. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
