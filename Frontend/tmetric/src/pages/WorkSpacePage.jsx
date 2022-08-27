import React from 'react'
import styles from "../Styles/WorkSpacePage.module.css"
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
   RadioGroup,
    Image,
    Radio,
    Select,
    Switch,
  } from '@chakra-ui/react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useDispatch } from 'react-redux';
  import {useNavigate,NavLink} from "react-router-dom"

  import {signup} from "../redux/auth/action"
  import { SIGNUP_SUCCESS } from '../redux/auth/actionType';
import { createWorkSpace } from '../redux/app/action';
import { WORKSPACE_CREATE_SUCCESS } from '../redux/app/actionType';
  
  export default function WorkSpacePage() {
    const [teamSize, setSize] = React.useState("1");
    const [companyName,setCompanyName] = React.useState("")
 
    const compRef = React.useRef()
    const sizeRef = React.useRef()
  

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!companyName) compRef.current.focus()
        else if(!teamSize) sizeRef.current.focus()
        else{
            dispatch( createWorkSpace({companyName,teamSize}))
            .then((res)=>res.type===WORKSPACE_CREATE_SUCCESS && res.payload.message==="Workspace created successfully Successfully." ? alert(res.payload.message) & navigate("/auth/integratettworkspace") : alert(res.payload.message) )
        }
    }
    return (
<div className={styles.SignUpapgeWrapper}>
  <div className={styles.GridWrapper}>

    <div className={styles.form}>
            <Flex>
               <Stack spacing={8} mx={'auto'} width="100%" py={12} px={2} alignItems="center">
               <Stack align={'center'}className={styles.heading}>
                  <Image className={styles.LoGImage} src='https://id.tmetric.com/images/tmetric_logo_and_text.svg' />
                  <Heading fontSize={'2xl'} color="#34393d" fontWeight={500}>Create your Workspace</Heading>
               </Stack>
               <Box
                  p={5} 
                  className={styles.FormBOx}
                >
                   <form onSubmit={handleSubmit}>
                    <Text marginBottom={3}>Fill in the fields below and get a new workspace</Text>
                   <Stack spacing={4}>
                   <FormControl id="companyName" isRequired>
                       <FormLabel>Company name</FormLabel>
                       <Input type="text"
                          ref={compRef}
                          placeholder="My company"
                          onChange={(e)=>setCompanyName(e.target.value)}
                       />
                   </FormControl>
                   <FormControl id="teamSize" isRequired>
                        <FormLabel>Team Size </FormLabel>
                           <Select 
                              placeholder='Please Select'
                              onChange={(e)=>setSize(e.target.value)}
                           >
                            <option value="0-1">0-1</option>
                            <option value="2-5">2-5</option>
                            <option value="6-10">6-10</option>
                           </Select>  
                   </FormControl>
                   <FormControl display='flex' justifyContent={"space-between"} >
                       <FormLabel htmlFor='email-alerts' mb='0'>
                       <Switch id='email-alerts' fontSize="12px" paddingRight={3} />
                           Generate demo Data for new workspace 
                       </FormLabel>
                    </FormControl>
                    <Text>
                        Please email updates to keep me informed about new features,usage,tips,feedback surveys and special offers.
                    </Text>
                    <RadioGroup defaultValue='2'>
                       <Stack spacing={5} direction='row'>
                            <Radio color='#4299e1' value='1'>
                            Yes
                            </Radio>
                            <Radio color='#4299e1' value='2'>
                             No
                            </Radio>
                       </Stack>
                  </RadioGroup>
                                

              <Stack spacing={10}>
                <Input
                type='submit'
                value={"Create"}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  placeholder="Create"
                  />
                 
                
              </Stack>
            </Stack>
        </form>
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