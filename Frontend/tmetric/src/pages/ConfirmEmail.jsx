import React from 'react'
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
  import {loadData} from "../utils/localstorage"
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useDispatch } from 'react-redux';
  import {useNavigate,NavLink} from "react-router-dom"
  import styles from "../Styles/ConfirmEmail.module.css"

const ConfirmEmail = () => {
    const [resend,setResend] = React.useState(false)

    const navigate  = useNavigate()
    const email = loadData("tmetricUser")?.email

    React.useEffect(()=>{
        setTimeout(()=>{ 
            navigate("/chooseworkspace")
        },5000)
    },[resend])

  return (
    <div>
        <div className={styles.SignUpapgeWrapper}>
            <div className={styles.GridWrapper}>
                <div className={styles.form}>
                    <Flex
                      justifyContent={"center"}
                      >
                         <Stack spacing={8} mx={'auto'} width="100%" py={12} px={2} margin="auto">
                            <Stack align={'center'}className={styles.heading}>
                                <Image className={styles.LoGImage} src='https://id.tmetric.com/images/tmetric_logo_and_text.svg' />
                                <Heading fontSize={'2xl'} color="#34393d" fontWeight={600}>Confirm Your Email Address</Heading>
                            </Stack>
                            <Box
                            className ={styles.TextrBox}
                              rounded={'lg'}
                              bg={useColorModeValue('white', 'gray.700')}
                           
                               p={8}
                               width="100%"
                            //    border="solid red 2px"
                               margin="auto"
                              
                            >
                                <Text className={styles.text}>We sent an email to 
                                    <span fontWeight="600"> {`${email}`}</span>. 
                                     Check your inbox to activate your account. 
                                </Text>
                                <Text className={styles.text} >Tips : Check your spam folder incase the email was incorrectly identified.</Text>

                                <Stack spacing={10}>
                <Input
                   className={styles.text} 
                   onClick={()=>setResend(!resend)}
                  type='submit'
                  bg={'#898e7e'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  value="Resend Email"
                />
                </Stack>
                            </Box>
            
            </Stack>
        </Flex>
    </div>
    <div className={styles.RightImageDiv}>
        <Image width="100%" src='https://id.tmetric.com/images/side_image_confirm_email.svg' />
    </div>
    </div>
       </div>
    </div>
  )
}

export default ConfirmEmail