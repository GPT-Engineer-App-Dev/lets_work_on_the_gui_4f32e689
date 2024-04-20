import { Box, Button, Container, Flex, IconButton, Input, Textarea, VStack, Heading, useToast, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Image, Switch, FormLabel, FormControl, HStack } from "@chakra-ui/react";
import { FaDownload, FaFileUpload, FaPrint, FaCog, FaPlus, FaMicrophone, FaRegKeyboard } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleDownloadChats = (format) => {
    // Placeholder function for downloading chats
    toast({
      title: `Downloaded chats.`,
      description: `Chats have been downloaded as ${format}.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handlePrintChats = () => {
    // Placeholder function for printing chats
    toast({
      title: `Print Chats`,
      description: `Chats have been sent to the printer.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={5}>
        <Heading as="h1">ChatGPT-4 Desktop App</Heading>
        <Flex direction={{base: "column", md: "row"}} w="full" gap={10}>
          {/* Main Chat Interface */}
          <Box flex={1} p={5} borderWidth="1px" borderRadius="lg">
            <VStack spacing={4}>
              <Box w="full" h="500px" p={3} overflowY="auto" borderWidth="1px" borderRadius="lg" bg="gray.50">
                {/* Chat messages would appear here */}
              </Box>
              <Textarea placeholder="Enter your message here..." />
              <Button leftIcon={<FaPlus />}>Send Message</Button>
            </VStack>
          </Box>
          
          {/* Side Panel */}
          <Box w={{base: "full", md: "300px"}}>
            {/* Avatar */}
            <VStack spacing={5} mb={10}>
              <Box w="full" h="200px" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src="https://images.unsplash.com/photo-1642334640124-c80d5e7e78d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbmltYXRlZCUyMGF2YXRhcnxlbnwwfHx8fDE3MDUzMjQ3MzJ8MA&ixlib=rb-4.0.3&q=80&w=1080" />
              </Box>
              <Button leftIcon={<FaFileUpload />}>Upload Avatar</Button>
            </VStack>

            {/* Communication Mode */}
            <VStack spacing={4} mb={10}>
              <Heading as="h3" size="md">Communication</Heading>
              <HStack>
                <IconButton icon={<FaMicrophone />} aria-label="Voice" />
                <IconButton icon={<FaRegKeyboard />} aria-label="Text" />
              </HStack>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="voice-toggle" mb="0">
                  Voice
                </FormLabel>
                <Switch id="voice-toggle" />
              </FormControl>
            </VStack>
            
            {/* Chat History */}
            <VStack spacing={4} mb={10}>
              <Heading as="h3" size="md">Chat History</Heading>
              <Menu>
                <MenuButton as={Button} rightIcon={<FaDownload />}>
                  Download
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => handleDownloadChats("docx")}>.docx</MenuItem>
                  <MenuItem onClick={() => handleDownloadChats("pdf")}>.pdf</MenuItem>
                  <MenuItem onClick={() => handleDownloadChats("txt")}>.txt</MenuItem>
                  <MenuItem onClick={() => handleDownloadChats("csv")}>.csv</MenuItem>
                </MenuList>
              </Menu>
              <IconButton icon={<FaPrint />} aria-label="Print" onClick={handlePrintChats} />
            </VStack>

            {/* File Management */} 
            <VStack spacing={4} mb={10}>
              <Heading as="h3" size="md">Files</Heading>
              <Button leftIcon={<FaFileUpload />}>Upload</Button>
              <Button leftIcon={<FaDownload />}>Download</Button>
            </VStack>

            {/* Settings */}
            <VStack spacing={4}>
              <Heading as="h3" size="md">Settings</Heading>  
              <Button leftIcon={<FaCog />}>Preferences</Button>
            </VStack>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
