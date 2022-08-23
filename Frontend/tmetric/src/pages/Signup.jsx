import React from 'react'
import styles from "../Styles/SignUp.module.css"
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    InputGroup,
    InputRightElement,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image,
    GridItem,
  } from '@chakra-ui/react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useDispatch } from 'react-redux';
  import {useNavigate} from "react-router-dom"

  import {signup} from "../redux/auth/action"
import { SIGNUP_SUCCESS } from '../redux/auth/actionType';
  
  export default function Signup() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [name,setName] = React.useState("")
    const [email,setEmail] = React.useState("")
    const [password,setPassword] = React.useState("")
    const nameRef = React.useRef()
    const emailRef = React.useRef()
    const passRef = React.useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!name) nameRef.current.focus()
        else if(!email) emailRef.current.focus()
        else if(!password) passRef.current.focus()
        else{
            dispatch( signup({name,email,password}))
            .then((res)=>res.type===SIGNUP_SUCCESS ? alert(res.payload.message) & navigate("/") : alert(res.payload.message) )
        }
    }
    return (
       <div className={styles.SignUpapgeWrapper}>
         <div className={styles.GridWrapper}>

    <div className={styles.form}>
            <Flex
            //    minH={'100vh'}
            //    align={'center'}
            //    justify={'center'}
           
            //    border="solid red 2px"
            //    width="100%"

            >
               <Stack spacing={8} mx={'auto'} width="100%" py={12} px={2} margin="auto">
               <Stack align={'center'}className={styles.heading}>
                  <Image className={styles.LoGImage} src='https://id.tmetric.com/images/tmetric_logo_and_text.svg' />
                  <Heading fontSize={'2xl'} color="#34393d" fontWeight={600}>Create your account</Heading>
               </Stack>
               <Box
                  rounded={'lg'}
                  bg={useColorModeValue('white', 'gray.700')}
                  boxShadow={'lg'}
                  p={8}
                >
                   <form onSubmit={handleSubmit}>
                   <Stack spacing={4}>
                   <FormControl id="name" isRequired>
                       <FormLabel>Name</FormLabel>
                       <Input type="text"
                       ref={nameRef}
                       placeholder="John Smith"
                          onChange={(e)=>setName(e.target.value)}
                       />
                   </FormControl>
                   <FormControl id="email" isRequired>
                        <FormLabel>Email </FormLabel>
                            <Input type="email"
                            ref={emailRef}
                            placeholder = "johnsmith@gmail.com"
                               onChange={(e)=>setEmail(e.target.value)}
                            />
                            
                   </FormControl>
                   <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <Input type={showPassword ? 'text' : 'password'}
                            ref={passRef}
                            placeholder = "Enter your password"
                               onChange={(e)=>setPassword(e.target.value)}
                            />
                            <InputRightElement h={'full'}>
                            <Button
                               variant={'ghost'}
                               onClick={() =>setShowPassword((showPassword) => !showPassword)
                              }>
                              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'flex-start'}>
                  <Checkbox>I accept</Checkbox>
                  <Link color={'blue.400'}>Terms of Service</Link>
                </Stack>
                <Input
                type='submit'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  placeholder="Sign Up"
                  />
                 
                
              </Stack>
                   </Stack>
                   </form>
                   <Box>
                     <div style={{display:"flex",gap:"5px",marginTop:"10px",marginBottom:"10px"}}>
                        <div className={styles.ThickLine} ></div>
                        <div>or</div>
                        <div className={styles.ThickLine} ></div>
                     </div>
                   </Box>
                   <Stack >
                      <Flex direction={"column"} gap={5}>
                      <Button className={styles.OauthLink} >
                          <Flex gap={5}>
                            <Image src="https://id.tmetric.com/images/google_logo.svg" />
                            <Text>Sign Up with Google</Text>
                          </Flex>
                       </Button>
                       <Button className={styles.OauthLink} >
                       <Flex gap={5}>
                            <Image src="https://id.tmetric.com/images/microsoft_logo.svg" />
                            <Text>Sign Up with Microsoft</Text>
                          </Flex>
                       </Button>
                       <Button className={styles.OauthLink} >
                       <Flex gap={5}>
                            <Image src="https://id.tmetric.com/images/apple_logo.svg" />
                            <Text>Sign Up with Apple</Text>
                        </Flex>
                       </Button>
                      </Flex>
                   </Stack>

                   <Stack pt={6}>
                     <Text align={'center'} color="black">
                     Already have an account? <Link color={'blue.400'}>Login</Link>
                     </Text>
                   </Stack>
               </Box>
               </Stack>
            </Flex>
    </div>
    <div className={styles.RightImageDiv}>
        <Image width="100%" src='https://id.tmetric.com/images/side_image_register.svg' />
    </div>
    </div>
    </div>
    );
  }