import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import Swal from 'sweetalert2';
export default function InputBox() {
    const [inputval, setinputval] = useState("")
    const [icon, seticon] = useState("")
    const [temp, settemp] = useState("")
    const [city, setcity] = useState("")
    const [humidity, sethumidity] = useState("")
    const [farha, setfarha] = useState("")
    const [region, setregion] = useState("")
    const [desc, setdesc] = useState("")
    let boxele = document.getElementById('aa')
    const token = localStorage.getItem("token")
    function Handlesubmit() {
        if (token) {
            fetch(`https://weather-application-deploy.onrender.com/city?city=${inputval}`)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    console.log(data)
                    seticon(data.current.condition.icon)
                    settemp(data.current.temp_c)
                    setcity(data.location.name)
                    sethumidity(data.current.humidity)
                    setfarha(data.current.temp_f)
                    setregion(data.location.region)
                    setdesc(data.current.condition.text)
                })
                .catch((err) => {
                    console.log(err)
                })
            boxele.style.display = "block"
        } else {
            Swal.fire(
                'You need to login',
                'Login first!',
                'error'
            )
        }
    }
    return (
        <Flex
            flexDirection={'column'}
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}
            >
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                    Enter your location to check the weather
                </Heading>

                <FormControl id="email">
                    <Input
                        value={inputval}
                        onChange={(e) => setinputval(e.target.value)}
                        placeholder="Enter your location to check the weather"
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                    />
                </FormControl>
                <Stack spacing={6}>
                    <Button
                        onClick={Handlesubmit}
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                    >
                        Submit
                    </Button>
                </Stack>
            </Stack>
            <Center py={6}>
                <Box
                    id="aa"
                    display={'none'}
                    maxW={'320px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    p={6}
                    textAlign={'center'}>
                    <Avatar
                        size={'xl'}
                        src={icon}
                        alt={'Avatar Alt'}
                        mb={4}
                        pos={'relative'}
                    />
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        {`${city}  ${temp}°`}
                    </Heading>
                    <Text >
                        {`${desc}`}
                    </Text>
                    <Text fontWeight={'bold'}>
                        {`Humidity:- ${humidity}`}
                    </Text>
                    <Text fontWeight={'bold'}>
                        {`Farhaniet:- ${farha}`}
                    </Text>
                    <Text fontWeight={'bold'}>
                        {`Region:- ${region}`}
                    </Text>


                </Box>
            </Center>
        </Flex>

    );
}