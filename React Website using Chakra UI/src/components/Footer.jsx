import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  VStack,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiOutlineSend,
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'5'}>
          <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to our newsletter to get more updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="    Enter your email ........"
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textAlign={'center'} textTransform={'uppercase'}>
            VideMe
          </Heading>
          <Text>All Rights Reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Follow us on Social Media
          </Heading>
          <Button variant={'link'} textTransform={'uppercase'}>
            <AiFillYoutube />
            <Box ml={2}>
              <a href="https://www.youtube.com/">
                <Box color="white">Youtube</Box>
              </a>
            </Box>
          </Button>
          <Button variant={'link'} textTransform={'uppercase'}>
            <AiFillInstagram />
            <Box ml={2}>
              <a href="https://www.instagram.com/">
                <Box color="white">Instagram</Box>
              </a>
            </Box>
          </Button>
          <Button variant={'link'} textTransform={'uppercase'}>
            <AiFillLinkedin />
            <Box ml={2}>
              <a href="https://www.linkedin.com/">
                <Box color="white">LinkedIn</Box>
              </a>
            </Box>
          </Button>
          <Button variant={'link'} textTransform={'uppercase'}>
            <AiFillGithub />
            <Box ml={2}>
              <a href="https://www.github.com/">
                <Box color="white">Github</Box>
              </a>
            </Box>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
