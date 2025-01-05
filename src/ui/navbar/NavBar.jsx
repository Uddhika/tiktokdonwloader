import { Flex, Image, Box, Button, HStack, VStack } from '@chakra-ui/react';
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '../../components/ui/drawer';
import React from 'react';
import logo from '../../assets/TikTik.svg';
import menu from '../../assets/menu.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const links = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about-us' },
    { label: 'Disclaimer', to: '/disclaimer' },
    { label: 'Terms and Conditions', to: '/terms-and-conditions' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
  ];

  return (
    <>
      <Box width="100%" p={2} px={4} boxShadow="md" borderRadius="lg">
        <Flex alignItems="center" gap={2} justifyContent="space-between">
          <a href="/">
            <Image src={logo} />
          </a>
          <Flex alignItems="center">
            <DrawerRoot>
              <DrawerBackdrop />
              <DrawerTrigger asChild>
                <Button display={{ base: 'flex', md: 'none' }} p={0}>
                  <Image src={menu} />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  {/* <DrawerTitle>Drawer Title</DrawerTitle> */}
                </DrawerHeader>
                <DrawerBody>
                  <VStack align="end">
                    {links.map((link, index) => (
                      <Button key={index} as={Link} to={link.to}>
                        {link.label}
                      </Button>
                    ))}
                  </VStack>
                </DrawerBody>
                <DrawerFooter>
                  {/* <DrawerActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerActionTrigger>
          <Button>Save</Button> */}
                </DrawerFooter>
                <DrawerCloseTrigger />
              </DrawerContent>
            </DrawerRoot>

            {/* Desktop menu */}
            <HStack display={{ base: 'none', md: 'flex' }}>
              {' '}
              {/* Hide on mobile */}
              {links.map((link, index) => (
                <Button key={index} as={Link} to={link.to}>
                  {link.label}
                </Button>
              ))}
            </HStack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
