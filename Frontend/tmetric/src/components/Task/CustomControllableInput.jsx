import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
    useEditableControls,
    ButtonGroup,
    IconButton,
    CloseButton,
    Input,Flex
  } from '@chakra-ui/react'
  import {CheckIcon,CloseIcon,EditIcon} from "@chakra-ui/icons"



export function CustomControlableInput() {
    /* Here's a custom control */
    function EditableControls() {
      const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
      } = useEditableControls()
  
      return isEditing ? (
        <ButtonGroup justifyContent='center' size='sm'>
          <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
          <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
        </ButtonGroup>
      ) : (
        <Flex justifyContent='center' gap={5}>
          <IconButton size='m' icon={<EditIcon />} {...getEditButtonProps()} />
        </Flex>
      )
    }
  
    return (
        
      <Editable
        textAlign='center'
        defaultValue='None'
        fontSize='xl'
        isPreviewFocusable={false}
      >
       <Flex direction={"row"} gap={5}>
       <EditablePreview />
        {/* Here is the custom input */}
        <Input as={EditableInput} border="solid red 2px"/>
      
        <EditableControls />
        </Flex>
      </Editable>
    
    )
  }