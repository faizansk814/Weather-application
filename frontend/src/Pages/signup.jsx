import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [preferredcity, setpreffered_city] = useState("")
  const navigate = useNavigate()

  function handleSubmit() {
    fetch(`https://weather-application-deploy.onrender.com/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password, preferredcity })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg == "User already present login") {
          toast.error(data.msg)
        } else {
          setname("")
          setemail("")
          setpassword("")
          setpreffered_city("")
          toast.success("Registration Succesful")
          navigate("/login")
          console.log(data);
        }


      })
      .catch((err) => {
        toast.error(err)
      })
  }


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'xl'} py={12} px={6}>
        <ToastContainer
          theme='colored'
        />
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Enter Your Name</FormLabel>
              <Input type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>email address</FormLabel>
              <Input type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="location" isRequired>
              <FormLabel>Enter Your preffered_city</FormLabel>
              <Input type="text"
                value={preferredcity}
                onChange={(e) => setpreffered_city(e.target.value)}

              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.700'} to="/login">Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}