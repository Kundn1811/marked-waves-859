import React from 'react'
import styles from "../Styles/SetupAlmostComp.module.css"
import {
    Box,
    Stack,
    Button,
    Heading,
    Text,
    Image
  } from '@chakra-ui/react';

  import {useNavigate,NavLink} from "react-router-dom"
  export default function SetupAlmostComp() {
    const navigate = useNavigate()
    return (
       <div className={styles.SignUpapgeWrapper}>
          <div className={styles.form}>
               <Stack  height="100vh"  width="100%">
               <Stack align={'center'}className={styles.heading}>
                  <Image className={styles.LoGImage} src='https://id.tmetric.com/images/tmetric_logo_and_text.svg' />
                  <Heading fontSize={'2xl'} color="#34393d" fontWeight={600} py={10} >Setup is Almost complete</Heading>
               </Stack>
               <Box
                p={8}
                >
                 
                  <Button className={styles.button} bg="#2277e5">
                      Continue
                  </Button>
               </Box>
               </Stack>
         </div>
     </div>
      
    );
  }