import {
  Heading,
  Box,
  Checkbox,
  Stack,
  Center,
  IconButton,
  Divider,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,

} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";

function App() {
  return (
    <Box bgColor='#1a202c' color='white' h='100vh' padding='2' textAlign='center'>
      <Heading size="md" padding='10' textAlign='center'>Chores ToDo List</Heading>
      <Center flexDirection='column'>
          <Stack spacing='1.5rem' direction='column' marginRight='8rem'>

            <Checkbox defaultChecked spacing='2rem'>
              Create Guest Experience mobile check-in
              <IconButton aria-label="4"
                icon={<DeleteIcon />} 
                colorScheme="red" 
                size='sm' />
            </Checkbox>

            <Checkbox defaultChecked spacing='2rem'>
              Document Current CI/CD process
              <IconButton aria-label="4"
                icon={<DeleteIcon />} 
                colorScheme="red" 
                size='sm' />
            </Checkbox>

            <Checkbox defaultChecked spacing='2rem'>
              Perform Code Review for final Pillow-Talk release
              <IconButton aria-label="4"
                icon={<DeleteIcon />} 
                colorScheme="red" 
                size='sm' />
            </Checkbox>

            <Checkbox defaultChecked spacing='2rem'>
              Implement new Color Palette from Design Team
              <IconButton aria-label="4"
                icon={<DeleteIcon />} 
                colorScheme="red" 
                size='sm' />
            </Checkbox>

            <Checkbox defaultChecked spacing='2rem'>
              Fix image uploading process for guest check-in
              <IconButton aria-label="4"
                icon={<DeleteIcon />} 
                colorScheme="red" 
                size='sm' />
            </Checkbox>

            <Checkbox defaultChecked spacing='2rem'>
              Provide on-boarding documentation
              <IconButton aria-label="4"
                icon={<DeleteIcon />} 
                colorScheme="red" 
                size='sm' />
            </Checkbox>

            <Divider></Divider>

            <Text fontSize='2xl' textAlign='center'>Done: 0</Text>

            <FormControl>
              <FormLabel>Add todo</FormLabel>
              <Input type='list'></Input>
            </FormControl>


          </Stack>
        </Center>

        <Center>
        <Stack spacing='1.5rem'/>
          <Button
            colorScheme="blue"
            size='sm'
            >
              ADD TASK
          </Button>
        </Center>

    </Box>
  )
}

export default App
