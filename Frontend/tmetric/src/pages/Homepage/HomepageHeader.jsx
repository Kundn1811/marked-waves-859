import React, { Fragment } from "react";
import {
  Box,
  HStack,
  Heading,
  Button,
  Text,
  AspectRatio,
} from "@chakra-ui/react";

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
