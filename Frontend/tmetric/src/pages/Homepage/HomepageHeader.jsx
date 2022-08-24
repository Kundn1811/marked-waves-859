import React, { Fragment } from "react";
import {
  Box,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

const HomepageHeader = () => {
  return (
    <Fragment>
      <HStack bg={"#FBEFCA"} pt="6.25rem" pb="1.25rem" pl="100px" pr="100px">
        <Box w="50%">
          <Heading as="h1" size="4xl" mb="1rem" noOfLines={2}>
            Make the best use of your time
          </Heading>
          <Heading as="h3" size="lg">
            TMetric is a smart choice for time tracking to see work in progress
            and keep team, cost and quality under control
          </Heading>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="#3070f0" />}
            />
            <Input
              placeholder="Enter your email address"
              m="1rem 0"
              maxW="450px"
              background="white"
              size="lg"
            />
          </InputGroup>
          <HStack>
            <Button size="lg" colorScheme="blue" mt="20px" minW="200px">
              Get Started
            </Button>
            <Text>Fully Functional 30-Day Trial</Text>
          </HStack>
        </Box>
        <Box w="50%">
          <AspectRatio ratio={16 / 9}>
            <iframe
              title="tmetric"
              src="https://www.youtube.com/embed/d2LwNiALPIM?autoplay=1&controls=1&list=PL74QEPdFcvLY9y7ZGsu9IE2kMwGJmAT3f&listType=playlist"
              allowFullScreen
            />
          </AspectRatio>
        </Box>
      </HStack>
    </Fragment>
  );
};

export default HomepageHeader;
