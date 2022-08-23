import React from 'react'
import styles from "../Styles/SignIn.module.css"
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
  } from '@chakra-ui/react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useDispatch } from 'react-redux';
  import {useNavigate} from "react-router-dom"

  import {signin} from "../redux/auth/action"
import { SIGNIN_SUCCESS } from '../redux/auth/actionType';
  
  export default function Signin() {
    const [showPassword, setShowPassword] = React.useState(false);
  
    const [email,setEmail] = React.useState("")
    const [password,setPassword] = React.useState("")
    
    const emailRef = React.useRef()
    const passRef = React.useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
      
        
        if(!email) emailRef.current.focus()
        else if(!password) passRef.current.focus()
        else{
            dispatch(signin({email,password}))
            .then((res)=>res.type===SIGNIN_SUCCESS ? alert(res.payload.message) & navigate("/") : alert(res.payload.message) )
        }
    }
    return (
       <div className={styles.SignUpapgeWrapper}>
         <div className={styles.GridWrapper}>

    <div className={styles.form}>
            <Flex>
               <Stack spacing={8} mx={'auto'} width="100%"  margin="auto">
               <Stack align={'center'}className={styles.heading}>
                  <Image className={styles.LoGImage} src='https://id.tmetric.com/images/tmetric_logo_and_text.svg' />
                  <Heading fontSize={'2xl'} color="#34393d" fontWeight={600}>Log into TMetric</Heading>
               </Stack>
               <Box
                  rounded={'lg'}
                  bg={useColorModeValue('white', 'gray.700')}
                  boxShadow={'lg'}
                  p={8}
                >
                   <form onSubmit={handleSubmit}>
                   <Stack spacing={4}>

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
    
                <Input
                type='submit'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  placeholder="Log in"
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

    </div>
    </div>
    );
  }