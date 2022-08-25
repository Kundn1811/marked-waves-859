import React from 'react'
import { IoAdd,IoChevronForwardOutline } from "react-icons/io5";
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
    useSliderStyles,
  } from '@chakra-ui/react';

  import {useNavigate,NavLink} from "react-router-dom"
  import styles from "../Styles/ChooseWorkSpace.module.css"


const ChooseWorkSpace = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className={styles.SignUpapgeWrapper} >
            <div className={styles.GridWrapper}>
                <div className={styles.form}>
                    <Flex
                      justifyContent={"center"}
                    >
                         <Stack spacing={8} mx={'auto'} width="100%" py={12} px={2} align={"center"} >
                            <Stack align={'center'} className={styles.heading}>
                                <Image className={styles.LoGImage} src='https://id.tmetric.com/images/tmetric_logo_and_text.svg' />
                                <Heading fontSize={'2xl'} color="#34393d" fontWeight={600}  >Let's choose your workspace</Heading>
                            </Stack>
                            <Box
                              className ={styles.TextrBox}
                              rounded={'lg'}
                              bg={useColorModeValue('white', 'gray.700')}
                              p={8}
                               width="70%"
                               
                            //    border={"solid red 2px"}
                            >
                                <Text
                                   color='blackAlpha.900'
                                   className={styles.text}>
                                    A workspace represents your company, business, or organization. it holds data in one place.
                                </Text>
                                

                <Stack spacing={2}  align={"center"} marginTop="30px" >
                   <Flex className={styles.Clickablebox}  boxShadow='base' p='4' rounded='md' bg='white'>
                      <Box  py={3} px={4}>
                         <IoAdd fontSize={25} color={"green"}  />
                      </Box>
                      <Flex direction={"column"} onClick={()=>{
                        navigate("/workspacepage")
                      }} >
                        <Heading fontWeight={400} fontSize={20}  color="black">Create Your Workspace</Heading>
                        <Text>For company owners and managers</Text>
                      </Flex>
                   </Flex>
                   <Flex className={styles.Clickablebox}  boxShadow='base' p='4' rounded='md' bg='white' >
                   <Box  py={3} px={4}>
                         <IoChevronForwardOutline fontSize={25} color={"green"}  />
                    </Box>
                      <Flex direction={"column"}>
                        <Heading fontWeight={400} fontSize={20}  color="black">Join an Existing Workspace</Heading>
                        <Text>For team members</Text>
                      </Flex>
                   </Flex>
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
    </div>
  )
}

export default ChooseWorkSpace