import React from 'react'
import styles from "../Styles/IntegrateTTWorkflowPage.module.css"
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
  import {useNavigate,NavLink} from "react-router-dom"

  import {signup} from "../redux/auth/action"
  import { SIGNUP_SUCCESS } from '../redux/auth/actionType';
  const data = [
    {img : "chrome-extension://ffijoclmniipjbhecddgkfpdafpbdnen/images/integrations/activecollab.svg"},
    {img : "chrome-extension://ffijoclmniipjbhecddgkfpdafpbdnen/images/integrations/asana.svg"},
    {img : "chrome-extension://ffijoclmniipjbhecddgkfpdafpbdnen/images/integrations/assembla.svg"},
    {img : "chrome-extension://ffijoclmniipjbhecddgkfpdafpbdnen/images/integrations/axosoft.svg"},
    {img : "chrome-extension://ffijoclmniipjbhecddgkfpdafpbdnen/images/integrations/azuredevops.svg"},
    {img : "chrome-extension://ffijoclmniipjbhecddgkfpdafpbdnen/images/integrations/bitbucket.svg"},
    {img : "chrome-extension://ffijoclmniipjbhecddgkfpdafpbdnen/images/integrations/bitrix.svg"}
  ]
  export default function IntegrateTTWorkFlowPage() {
   

    const navigate = useNavigate()
    
  const handleNavigate = () =>{
     setTimeout(()=>{
        navigate("/setupalmostcomp")
     },10000)
  }
    return (
       <div className={styles.SignUpapgeWrapper}>
         <div className={styles.GridWrapper}>

    <div className={styles.form}>
        
               <Stack spacing={8} mx={'auto'} width="100%" py={12} px={2} >
               <Stack align={'center'}className={styles.heading}>
                  <Image className={styles.LoGImage} src='https://id.tmetric.com/images/tmetric_logo_and_text.svg' />
                  <Heading fontSize={'2xl'} color="#34393d" fontWeight={600}>Integrate Time Tracking Into Your Workflow</Heading>
               </Stack>
               <Box
                p={8}
                >
                  <Text className={styles.text}>Track Time inside documents and task management tools</Text>
                  <Button className={styles.button} bg="#2277e5"
                  onClick={handleNavigate}
                  >
                       Install Browser Extension
                  </Button>
               </Box>
               </Stack>
               {/* <div className={styles.gridDiv}>
                   {data?.map((elem,index)=>(
                    <Image key={index} src={elem.img} className="gridElem" />
                   
                   ))}
               </div> */}
            
    </div>
    <div className={styles.RightImageDiv}>
        <Image width="100%" src='https://id.tmetric.com/images/side_image_register.svg' />
    </div>
    </div>
       </div>
    );
  }