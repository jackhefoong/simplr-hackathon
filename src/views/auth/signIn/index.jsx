import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {MdOutlineRemoveRedEye} from 'react-icons/md';
import {RiEyeCloseLine} from 'react-icons/ri';

function SignIn() {
  const history = useHistory();
  function handleSubmit() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = {email, password};
    if (email == 'admin@mail.com') {
      user.isAdmin = 'True';
      history.push('/');
      history.go(0)
      window.localStorage.setItem('user', JSON.stringify(user));
    } else if (email == 'user@mail.com') {
      user.isAdmin = 'False';
      user.isOnboarding = 'True';
      history.push('/');
      history.go(0)
      window.localStorage.setItem('user', JSON.stringify(user));
    }
  }
  // Chakra color mode
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';
  const brandStars = useColorModeValue('brand.500', 'brand.400');
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Flex
      w="100%"
      mx={{base: 'auto', lg: '0px'}}
      me="auto"
      h="100%"
      alignItems="center"
      justifyContent="center"
      px={{base: '25px', md: '0px'}}
      mt={{base: '40px', md: '14vh'}}
      flexDirection="column"
    >
      <Flex
        zIndex="2"
        direction="column"
        w={{base: '100%', md: '420px'}}
        maxW="100%"
        background="transparent"
        borderRadius="15px"
        mx={{base: 'auto', lg: 'unset'}}
        me="auto"
      >
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Sign In
          </Heading>
          <Text mb="36px" ms="4px" color={textColorSecondary} fontWeight="400" fontSize="md">
            Enter your email and password to sign in!
          </Text>
        </Box>
        <FormControl>
          <FormLabel display="flex" ms="4px" fontSize="sm" fontWeight="500" color={textColor} mb="8px">
            Email<Text color={brandStars}>*</Text>
          </FormLabel>
          <Input
            isRequired={true}
            variant="auth"
            fontSize="sm"
            ms={{base: '0px', md: '0px'}}
            type="email"
            placeholder="name@mail.com"
            mb="24px"
            fontWeight="500"
            size="lg"
            id="email"
          />
          <FormLabel ms="4px" fontSize="sm" fontWeight="500" color={textColor} display="flex">
            Password<Text color={brandStars}>*</Text>
          </FormLabel>
          <InputGroup size="md">
            <Input
              isRequired={true}
              fontSize="sm"
              placeholder="Min. 8 characters"
              mb="24px"
              size="lg"
              type={show ? 'text' : 'password'}
              variant="auth"
              id="password"
            />
            <InputRightElement display="flex" alignItems="center" mt="4px">
              <Icon
                color={textColorSecondary}
                _hover={{cursor: 'pointer'}}
                as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                onClick={handleClick}
              />
            </InputRightElement>
          </InputGroup>
          <Flex justifyContent="space-between" align="center" mb="24px"></Flex>
          <Button fontSize="sm" variant="brand" fontWeight="500" w="100%" h="50" onClick={handleSubmit}>
            Sign In
          </Button>
        </FormControl>
      </Flex>
    </Flex>
  );
}

export default SignIn;
