import React from "react";
import {
  Box,
  Button,
  Heading,
  Link,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const MonitorTime = () => {
  return (
    <Box bg="#f6f7f8" p="60px 80px">
      <Box display="flex">
        <Box w="40%">
          <Heading
            as="h2"
            fontWeight="bold"
            fontSize="3rem"
            mb="2rem"
            maxW="800px"
            noOfLines={3}
          >
            Monitor attendance and time-off requests
          </Heading>
          <UnorderedList
            fontSize="1.25rem"
            lineHeight="1.4"
            marginStart="2rem"
            fontWeight="500"
          >
            <ListItem>flexible time off policy</ListItem>
            <ListItem>time off requests management</ListItem>
            <ListItem>time off calendar</ListItem>
            <ListItem>pto calculations</ListItem>
          </UnorderedList>
          <Button
            size="lg"
            bg="#3070f0"
            color="white"
            mt="20px"
            minW="200px"
            _hover={{ bg: "#0053a6" }}
          >
            Start Free Trial
          </Button>
        </Box>
        <Box w="60%" pt="40px">
          <Image
            src="https://tmetric.com/media/0sapzfi1/time-off-calendar-case.png"
            alt="Monitor attendance and time-off requests"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MonitorTime;
